//const BASE_URL = 'http://api.eventspaces.mx';
const BASE_URL = 'http://localhost:8080';
//const BASE_URL = 'https://springboot.eventspaces.mx:8443';
const ID_HALL = 1;

const API_URLS = {
    GET_RESERVATIONS: `${BASE_URL}/reservation/${ID_HALL}`,
    SAVE_RESERVATION: `${BASE_URL}/reservation/save`,
    GET_PACKAGES:  `${BASE_URL}/package_pricing/${ID_HALL}`,
    GET_NOTICE_PRIVACY:'https://storage.googleapis.com/bk-event-spaces/public/Aviso%20de%20Privacidad.pdf'
};

export { ID_HALL, API_URLS };