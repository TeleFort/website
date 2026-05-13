import Pocketbase from 'pocketbase';


/* =========================================================
   POCKETBASE CLIENT

   IMPORTANT:
   ngrok may block browser/API requests with a warning page.
   The custom header below tells ngrok to skip that warning.
========================================================= */
const POCKETBASE_API_URL =
  'https://reproach-calorie-donator.ngrok-free.dev';


const pocketbaseClient =
  new Pocketbase(
    POCKETBASE_API_URL
  );


/* =========================================================
   NGROK FIX
   Required for browser requests passing through ngrok
========================================================= */
pocketbaseClient.beforeSend = function (
  url,
  options
) {

  options.headers = {
    ...options.headers,

    'ngrok-skip-browser-warning':
      'true',
  };


  return {
    url,
    options,
  };

};


export default pocketbaseClient;

export {
  pocketbaseClient,
};