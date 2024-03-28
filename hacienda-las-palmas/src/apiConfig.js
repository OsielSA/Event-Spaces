const BASE_URL = 'http://localhost:8080/api';
const ID_HALL = 1;

const API_URLS = {
    GET_RESERVATIONS: `${BASE_URL}/reservation/${ID_HALL}`,
    SAVE_RESERVATION: `${BASE_URL}/reservation/save`,
    // UPDATE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/update/{idAccount}`,
    // DELETE_DEBIT_ACOUNT: `${BASE_URL}/debit_account/delete/{idAccount}`,
    // GET_MOVEMENTS: `${BASE_URL}/debit_account/movement/{idAccount}`,
    // SAVE_MOVEMENT: `${BASE_URL}/debit_account/movement/save`,
};

export { ID_HALL, API_URLS };