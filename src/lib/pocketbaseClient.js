import Pocketbase from 'pocketbase';

const POCKETBASE_API_URL = 'https://reproach-calorie-donator.ngrok-free.dev';

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient };