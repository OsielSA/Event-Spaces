import { Link } from "react-router-dom";


const ReservationCompletedMsj = ({ reservationCode, limitedDate }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>
            <div className="relative max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h2 className="mt-4 text-2xl font-extrabold text-gray-900">¡Reservación completada!</h2>
                </div>
                <div className="my-6 text-center">
                    <p className="my-2 text-xl font-bold text-sky-800">{reservationCode}</p>
                    <p className="my-2 text-sm font-medium text-gray-700">Su código de reservación</p>
                    <p className="text-sm text-gray-700">Recuerde llevar su anticipo antes del {limitedDate}</p>
                </div>
                <div className="text-center">
                    <Link to="/">
                        <button type="button" className="px-5 py-2 mt-4 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 text-sm">Cerrar</button>
                    </Link>        
                </div>
            </div>
        </div>
    );
}

export default ReservationCompletedMsj;