import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import { API_URLS } from '../apiConfig';
import ReservationCompletedMsj from '../components/ReservationCompletedMsj';

const ConfirmationPage = () => {
    const reservation = useSelector((state) => state.reservation);
    const [customerName, setCustomerName] = useState('');

    const [reservationFinished, setReservationFinished] = useState(false);
    const [reservationCode, setReservationCode] = useState('');
    
    const handleCustomerName = (event) => { setCustomerName(event.target.value); }
    const handleSaveReservation = () => {
        const parameters = {
            idHall: reservation.idHall,
            codeReservation: '',
            customerName: customerName,
            reservationStatus: 1,
            reservationConfirmed: '',
            reservationDate: reservation.reservationDate
        }
        console.log(parameters)
        saveReservation('POST', parameters)

    };

    const saveReservation = async(method, parameters) => {
        try{
            const response = await axios({ method: method, url: API_URLS.SAVE_RESERVATION, data: parameters });
            if (response.status === 201) { // Created
                setReservationFinished(true);
                setReservationCode(response.data.codeReservation)
            } else {
                alert("Error al guardar la reserva. Por favor, inténtelo de nuevo.");
            }
        }
        catch(error){
            console.error("Error al guardar la reserva:", error);
            alert("Hubo un problema al intentar guardar la reserva. Por favor, inténtelo de nuevo más tarde.");
        }
    }
    return (
        <>
            {!reservationFinished &&
                <div>
                    <div className="flex items-center justify-center h-full w-full">
                        <div>
                            <label>Finaliza tu reservación</label>
                        </div>

                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <form className="w-4/5 p-3 bg-white border border-gray-200 rounded-lg shadow ">
                            <div className="mb-4">
                                <label for="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                                <input type="text" value={customerName} onChange={handleCustomerName}
                                    id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required="" />
                            </div>
                            <div className="mb-4">
                                <label for="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo (opcional)</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label for="reservationDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha de Reservación</label>
                                <input type="text" id="reservationDate" name="reservationDate" value="2022-12-31" readonly="" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div className="flex justify-between">
                                <Link to="/">
                                    <button type="button" className="bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-500 text-gray-700 font-medium rounded-lg py-2.5 text-sm mr-2">Cancelar</button>
                                </Link>
                                <button type="button" onClick={() => handleSaveReservation()} className="w-3/4 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 text-sm">Reservar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {reservationFinished &&
                <ReservationCompletedMsj reservationCode={reservationCode} />
            }
        </>
    );
}

export default ConfirmationPage;