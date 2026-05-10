import * as XLSX from 'xlsx';


function formatDateTime(
  dateString
) {

  if (!dateString)
    return '';


  const date =
    new Date(
      dateString
    );


  const day = String(
    date.getDate()
  ).padStart(
    2,
    '0'
  );


  const month = String(
    date.getMonth() + 1
  ).padStart(
    2,
    '0'
  );


  const year =
    date.getFullYear();


  const hours = String(
    date.getHours()
  ).padStart(
    2,
    '0'
  );


  const minutes = String(
    date.getMinutes()
  ).padStart(
    2,
    '0'
  );


  const seconds = String(
    date.getSeconds()
  ).padStart(
    2,
    '0'
  );


  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}


export function exportToExcel(
  data,
  fileName
) {

  const formattedData =
    data.map(
      item => ({

        ...item,

        created:
          formatDateTime(
            item.created
          ),

        updated:
          formatDateTime(
            item.updated
          ),

        date:
          formatDateTime(
            item.date
          ),

      })
    );


  const worksheet =
    XLSX.utils
      .json_to_sheet(
        formattedData
      );


  const workbook =
    XLSX.utils
      .book_new();


  XLSX.utils
    .book_append_sheet(
      workbook,
      worksheet,
      'Data'
    );


  XLSX.writeFile(
    workbook,
    `${fileName}.xlsx`
  );
}