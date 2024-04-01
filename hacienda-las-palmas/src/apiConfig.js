const BASE_URL = 'http://api.eventspaces.mx';
//const BASE_URL = 'http://localhost:8080/api';
const ID_HALL = 1;

const API_URLS = {
    GET_RESERVATIONS: `${BASE_URL}/reservation/${ID_HALL}`,
    SAVE_RESERVATION: `${BASE_URL}/reservation/save`
};

export { ID_HALL, API_URLS };