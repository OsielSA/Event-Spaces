//const BASE_URL = 'http://api.eventspaces.mx';
//const BASE_URL = 'http://localhost:8080';
import { updateText } from "./resources/TextDescriptions";
const BASE_URL = 'https://springboot.eventspaces.mx:8443';
let ID_HALL = 1;


let API_URLS = {
    GET_RESERVATIONS: `${BASE_URL}/reservation/${ID_HALL}`,
    SAVE_RESERVATION: `${BASE_URL}/reservation/save`,
    GET_PACKAGES:  `${BASE_URL}/package_pricing/${ID_HALL}`,
    GET_NOTICE_PRIVACY:'https://storage.googleapis.com/bk-event-spaces/public/Aviso%20de%20Privacidad.pdf',
    GET_LOGO_ES_WHITE: 'https://storage.googleapis.com/bk-event-spaces/public/EventSpaces/eventspaces-logo-white.png',
    GET_LOGO_ES_BLACK: 'https://storage.googleapis.com/bk-event-spaces/public/EventSpaces/eventspaces-logo-black.png'
};

const setIdHall = (newId) => {
    ID_HALL = newId;
    // Actualiza los valores de API_URLS con el nuevo ID_HALL
    API_URLS.GET_RESERVATIONS = `${BASE_URL}/reservation/${ID_HALL}`;
    API_URLS.GET_PACKAGES = `${BASE_URL}/package_pricing/${ID_HALL}`;
    updateText(newId);
};

export { ID_HALL, API_URLS, setIdHall };