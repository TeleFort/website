import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import {
  DragDropContext,
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';

import pb from '@/lib/pocketbaseClient';

import {
  exportToExcel,
} from '@/lib/exportExcel';


/* =========================================================
   PIPELINE STAGES
========================================================= */
const leadStages = [
  'unread',
  'in-progress',
  'quoted',
  'won',
  'closed',
];


const bookingStages = [
  'pending',
  'confirmed',
  'completed',
  'cancelled',
];


/* =========================================================
   STATUS COLORS
========================================================= */
function getStageColor(
  stage
) {

  switch (stage) {

    case 'unread':
      return 'bg-blue-100 text-blue-700 border-blue-200';

    case 'in-progress':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';

    case 'quoted':
      return 'bg-purple-100 text-purple-700 border-purple-200';

    case 'won':
      return 'bg-green-100 text-green-700 border-green-200';

    case 'closed':
      return 'bg-red-100 text-red-700 border-red-200';

    case 'pending':
      return 'bg-orange-100 text-orange-700 border-orange-200';

    case 'confirmed':
      return 'bg-blue-100 text-blue-700 border-blue-200';

    case 'completed':
      return 'bg-green-100 text-green-700 border-green-200';

    case 'cancelled':
      return 'bg-red-100 text-red-700 border-red-200';

    default:
      return 'bg-slate-100';
  }
}


/* =========================================================
   KPI CARD
========================================================= */
function KPI({
  label,
  value,
  color,
}) {

  return (

    <div
      className={`
        border
        rounded-lg
        px-3
        py-3
        text-center
        min-w-[110px]
        ${color}
      `}
    >

      <p className="text-xs mb-1">

        {label}

      </p>


      <p className="text-2xl font-bold">

        {value}

      </p>

    </div>

  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */
export default function AdminDashboardPage() {

  const navigate =
    useNavigate();


  /* =========================================================
     STATE
  ========================================================= */
  const [
    contacts,
    setContacts,
  ] = useState([]);


  const [
    bookings,
    setBookings,
  ] = useState([]);


  const [
    activityLogs,
    setActivityLogs,
  ] = useState([]);


  const [
    loading,
    setLoading,
  ] = useState(true);


  const [
    activeTab,
    setActiveTab,
  ] = useState('leads');


  const [
    search,
    setSearch,
  ] = useState('');


  const [
    selectedLead,
    setSelectedLead,
  ] = useState(null);


  const [
    selectedBooking,
    setSelectedBooking,
  ] = useState(null);


  /* =========================================================
     DATE FORMAT
  ========================================================= */
  function formatDate(
    value
  ) {

    if (!value) {

      return 'N/A';
    }

    const date =
      new Date(
        value
      );


    const day =
      String(
        date.getDate()
      ).padStart(
        2,
        '0'
      );


    const month =
      String(
        date.getMonth() + 1
      ).padStart(
        2,
        '0'
      );


    const year =
      date.getFullYear();


    const hours =
      String(
        date.getHours()
      ).padStart(
        2,
        '0'
      );


    const minutes =
      String(
        date.getMinutes()
      ).padStart(
        2,
        '0'
      );


    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }


  /* =========================================================
     ACTIVITY LOGGER
  ========================================================= */
  async function logActivity({
    recordId,
    recordType,
    oldStatus,
    newStatus,
    action,
  }) {

    await pb
      .collection(
        'activity_logs'
      )
      .create({

        record_id:
          recordId,

        record_type:
          recordType,

        old_status:
          oldStatus,

        new_status:
          newStatus,

        action,

        timestamp:
          new Date()
            .toISOString(),

      });
  }


  /* =========================================================
     LOAD DATA
  ========================================================= */
  async function loadData() {

    try {

      setLoading(true);


      const leadRecords =
        await pb
          .collection(
            'contact_messages'
          )
          .getFullList({
            sort:
              '-created',
          });
console.log('LEADS:', leadRecords);


      const bookingRecords =
        await pb
          .collection(
            'bookings'
          )
          .getFullList({
            sort:
              '-created',
          });
console.log('BOOKINGS:', bookingRecords);

      const logRecords =
        await pb
          .collection(
            'activity_logs'
          )
          .getFullList({
            sort:
              '-timestamp',
          });


      setContacts(
        leadRecords
      );


      setBookings(
        bookingRecords
      );


      setActivityLogs(
        logRecords
      );

    } catch (
      error
    ) {

      console.error(
        error
      );

    } finally {

      setLoading(false);

    }
  }


  /* =========================================================
     LOGOUT
  ========================================================= */
  function logout() {

    pb.authStore.clear();

    navigate(
      '/admin-login'
    );
  }


  /* =========================================================
     DELETE
  ========================================================= */
  async function deleteLead(
    item
  ) {

    if (
      !window.confirm(
        'Delete this lead?'
      )
    ) return;


    await logActivity({

      recordId:
        item.id,

      recordType:
        'lead',

      oldStatus:
        item.status,

      newStatus:
        '',

      action:
        'deleted',

    });


    await pb
      .collection(
        'contact_messages'
      )
      .delete(
        item.id
      );


    setSelectedLead(
      null
    );


    loadData();
  }


  async function deleteBooking(
    item
  ) {

    if (
      !window.confirm(
        'Delete this booking?'
      )
    ) return;


    await logActivity({

      recordId:
        item.id,

      recordType:
        'booking',

      oldStatus:
        item.status,

      newStatus:
        '',

      action:
        'deleted',

    });


    await pb
      .collection(
        'bookings'
      )
      .delete(
        item.id
      );


    setSelectedBooking(
      null
    );


    loadData();
  }


  /* =========================================================
     DRAG DROP
  ========================================================= */
  async function onDragEnd(
    result
  ) {

    if (
      !result.destination
    ) return;


    const recordId =
      result.draggableId;


    const newStatus =
      result.destination
        .droppableId;


    const currentList =
      activeTab ===
      'leads'

        ? contacts

        : bookings;


    const item =
      currentList.find(
        x =>
          x.id ===
          recordId
      );


    const oldStatus =
      item?.status;


    if (
      activeTab ===
      'leads'
    ) {

      await pb
        .collection(
          'contact_messages'
        )
        .update(
          recordId,
          {
            status:
              newStatus,
          }
        );

    } else {

      await pb
        .collection(
          'bookings'
        )
        .update(
          recordId,
          {
            status:
              newStatus,
          }
        );
    }


    await logActivity({

      recordId,

      recordType:
        activeTab ===
        'leads'
          ? 'lead'
          : 'booking',

      oldStatus,

      newStatus,

      action:
        'status_changed',

    });


    loadData();
  }


  /* =========================================================
     INITIAL LOAD
  ========================================================= */
  useEffect(() => {

    loadData();

  }, []);


  /* =========================================================
     FILTERS
  ========================================================= */
  const filteredContacts =
    useMemo(() => {

      return contacts.filter(
        x =>
          x.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      contacts,
      search,
    ]);


  const filteredBookings =
    useMemo(() => {

      return bookings.filter(
        x =>
          x.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      bookings,
      search,
    ]);


  /* =========================================================
     KPI
  ========================================================= */
  const totalLeads =
    contacts.length;

  const unreadLeads =
    contacts.filter(
      x =>
        x.status ===
        'unread'
    ).length;

  const progressLeads =
    contacts.filter(
      x =>
        x.status ===
        'in-progress'
    ).length;

  const quotedLeads =
    contacts.filter(
      x =>
        x.status ===
        'quoted'
    ).length;

  const wonLeads =
    contacts.filter(
      x =>
        x.status ===
        'won'
    ).length;

  const closedLeads =
    contacts.filter(
      x =>
        x.status ===
        'closed'
    ).length;

  const conversionRate =
    totalLeads > 0

      ? (
          (
            wonLeads /
            totalLeads
          ) * 100
        ).toFixed(
          1
        )

      : 0;


  const totalBookings =
    bookings.length;

  const pendingBookings =
    bookings.filter(
      x =>
        x.status ===
        'pending'
    ).length;

  const confirmedBookings =
    bookings.filter(
      x =>
        x.status ===
        'confirmed'
    ).length;

  const completedBookings =
    bookings.filter(
      x =>
        x.status ===
        'completed'
    ).length;

  const cancelledBookings =
    bookings.filter(
      x =>
        x.status ===
        'cancelled'
    ).length;


  /* =========================================================
     HELPERS
  ========================================================= */
  function getLogs(
    recordId
  ) {

    return activityLogs.filter(
      x =>
        x.record_id ===
        recordId
    );
  }


  const currentData =
    activeTab ===
    'leads'

      ? filteredContacts

      : filteredBookings;


  const currentStages =
    activeTab ===
    'leads'

      ? leadStages

      : bookingStages;


  /* =========================================================
     RENDER
  ========================================================= */
  return (

    <div className="min-h-screen bg-background p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">

          TeleFort CRM Dashboard

        </h1>


        <button
          onClick={logout}
          className="px-5 py-2 bg-primary text-primary-foreground rounded-lg"
        >

          Logout

        </button>

      </div>


      {/* TABS */}
      <div className="flex gap-4 mb-8">

        <button
          onClick={() =>
            setActiveTab(
              'leads'
            )
          }
          className={`px-5 py-2 rounded-lg ${
            activeTab ===
            'leads'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted'
          }`}
        >
          Contact Leads
        </button>


        <button
          onClick={() =>
            setActiveTab(
              'bookings'
            )
          }
          className={`px-5 py-2 rounded-lg ${
            activeTab ===
            'bookings'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted'
          }`}
        >
          Bookings
        </button>

      </div>


      {/* KPI */}
      {activeTab ===
      'leads' ? (

        <div className="grid grid-cols-7 gap-3 mb-8">

          <KPI label="Total" value={totalLeads} color="bg-slate-100" />
          <KPI label="Unread" value={unreadLeads} color={getStageColor('unread')} />
          <KPI label="Progress" value={progressLeads} color={getStageColor('in-progress')} />
          <KPI label="Quoted" value={quotedLeads} color={getStageColor('quoted')} />
          <KPI label="Won" value={wonLeads} color={getStageColor('won')} />
          <KPI label="Closed" value={closedLeads} color={getStageColor('closed')} />
          <KPI label="Conv %" value={`${conversionRate}%`} color="bg-slate-100" />

        </div>

      ) : (

        <div className="grid grid-cols-5 gap-3 mb-8">

          <KPI label="Total" value={totalBookings} color="bg-slate-100" />
          <KPI label="Pending" value={pendingBookings} color={getStageColor('pending')} />
          <KPI label="Confirmed" value={confirmedBookings} color={getStageColor('confirmed')} />
          <KPI label="Completed" value={completedBookings} color={getStageColor('completed')} />
          <KPI label="Cancelled" value={cancelledBookings} color={getStageColor('cancelled')} />

        </div>

      )}


      {/* SEARCH + EXPORT */}
      <div className="flex gap-4 mb-8">

        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search..."
          className="flex-1 border rounded-lg px-4 py-3"
        />


        <button
          onClick={() =>
            exportToExcel(
              currentData,
              activeTab
            )
          }
          className="px-5 py-3 bg-secondary rounded-lg"
        >
          Export
        </button>

      </div>


      {/* KANBAN */}
      {!loading && (

        <DragDropContext
          onDragEnd={
            onDragEnd
          }
        >

          <div
            className={`grid gap-4 ${
              activeTab ===
              'leads'
                ? 'grid-cols-5'
                : 'grid-cols-4'
            }`}
          >

            {currentStages.map(
              stage => (

                <Droppable
                  key={stage}
                  droppableId={stage}
                >

                  {(provided) => (

                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="bg-muted rounded-xl p-4 min-h-[650px]"
                    >

                      <div
                        className={`
                          mb-4
                          px-4
                          py-3
                          rounded-xl
                          border
                          text-center
                          font-bold
                          capitalize
                          ${getStageColor(stage)}
                        `}
                      >

                        {stage}

                      </div>


                      {currentData
                        .filter(
                          x =>
                            String(
                              x.status || ''
                            )
                              .trim()
                              .toLowerCase() ===
                            stage
                        )
                        .map(
                          (
                            item,
                            index
                          ) => (

                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >

                              {(provided) => (

                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  onClick={() => {

                                    if (
                                      activeTab ===
                                      'leads'
                                    ) {

                                      setSelectedLead(item);

                                    } else {

                                      setSelectedBooking(item);
                                    }

                                  }}
                                  className={`
                                    border-2
                                    rounded-xl
                                    p-4
                                    mb-3
                                    cursor-pointer
                                    hover:shadow-lg
                                    ${getStageColor(stage)}
                                  `}
                                >

                                  <p className="font-semibold">

                                    {item.name}

                                  </p>


                                  <p className="text-sm mt-1">

                                    {activeTab === 'leads'
                                      ? item.subject
                                      : formatDate(item.date)}

                                  </p>

                                </div>

                              )}

                            </Draggable>

                          )
                        )}


                      {provided.placeholder}

                    </div>

                  )}

                </Droppable>

              )
            )}

          </div>

        </DragDropContext>

      )}


      {/* LEAD DRAWER */}
      {selectedLead && (

        <Drawer
          item={selectedLead}
          close={() =>
            setSelectedLead(
              null
            )
          }
          remove={() =>
            deleteLead(
              selectedLead
            )
          }
          logs={getLogs(
            selectedLead.id
          )}
          formatDate={
            formatDate
          }
        />

      )}


      {/* BOOKING DRAWER */}
      {selectedBooking && (

        <Drawer
          item={selectedBooking}
          close={() =>
            setSelectedBooking(
              null
            )
          }
          remove={() =>
            deleteBooking(
              selectedBooking
            )
          }
          logs={getLogs(
            selectedBooking.id
          )}
          formatDate={
            formatDate
          }
        />

      )}

    </div>

  );
}


/* =========================================================
   DRAWER
========================================================= */
function Drawer({
  item,
  close,
  remove,
  logs,
  formatDate,
}) {

  return (

    <div className="fixed top-0 right-0 w-[420px] h-full bg-card border-l p-8 overflow-y-auto shadow-2xl z-50">

      <div className="flex gap-3 mb-6">

        <button
          onClick={close}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Close
        </button>


        <button
          onClick={remove}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Delete
        </button>

      </div>


      <div className="space-y-3 mb-8">

        {Object.keys(
          item
        ).map(
          key => (

            <p key={key}>

              <strong>
                {key}:
              </strong>{' '}
              {
                String(
                  item[
                    key
                  ]
                )
              }

            </p>

          )
        )}

      </div>


      <h3 className="font-bold mb-4 text-lg">

        Activity Timeline

      </h3>


      <div className="space-y-3">

        {logs.map(
          log => (

            <div
              key={log.id}
              className="border rounded-lg p-3"
            >

              <p className="font-semibold text-sm">

                {
                  log.action
                }

              </p>


              <p className="text-xs">

                {
                  log.old_status
                } → {
                  log.new_status
                }

              </p>


              <p className="text-xs text-muted-foreground">

                {formatDate(
                  log.timestamp
                )}

              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}