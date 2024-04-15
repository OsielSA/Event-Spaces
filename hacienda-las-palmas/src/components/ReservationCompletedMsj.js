import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TEXT_DESCRIPTIONS } from "../resources/TextDescriptions";

const ReservationCompletedMsj = ({ reservationCode, limitedDate, enteredEmail }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="relative max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h2 className="mt-4 text-2xl font-extrabold text-gray-900">¡Reservación completada!</h2>
                </div>
                <div className="my-6 text-center">
                    <p className="my-2 text-xl font-bold text-sky-800">{reservationCode}</p>
                    {!enteredEmail &&
                        <p className="my-2 text-sm font-medium text-gray-700">Su código de reservación</p>
                    }
                    {enteredEmail &&
                        <p className="mt-2 mb-4 text-sm font-medium text-gray-700">Se ha enviado el código de reserva a su correo electrónico. Por favor, revise su bandeja de spam si no lo ve en su bandeja de entrada.</p>
                    }
                    <p className="text-sm text-gray-700">La fecha límite para llevar su anticipo es el <span className="font-medium">{limitedDate}</span>. De lo contrario, la reserva será cancelada.</p>
                </div>
                <div className="my-6">
                    <div className="text-center mb-3">
                        <label className="text-sm text-gray-700">Puede comunicarse con nosotros a través de:</label>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom:'5px' }}>
                        <a href={TEXT_DESCRIPTIONS.WHATSAPP_LINK} target="_blank" className="flex items-center hover:text-gray-400">
                            <FaWhatsapp className="mr-2" />{TEXT_DESCRIPTIONS.HALL_NAME}
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <a href={`tel:${TEXT_DESCRIPTIONS.PHONE}`} className="flex items-center hover:text-gray-400">
                            <IoCallOutline className="mr-2" />{TEXT_DESCRIPTIONS.PHONE_FORMAT}
                        </a>
                    </div>
                </div>
                <div className="my-6 text-center">
                    <label className="text-sm font-medium text-sky-950">¡Gacias por elegirnos!</label>
                </div>
                <div className="text-center">
                    <Link to="/">
                        <button type="button" className="px-5 py-2 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 text-sm">Cerrar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ReservationCompletedMsj;