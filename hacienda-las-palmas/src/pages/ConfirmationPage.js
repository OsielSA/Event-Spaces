import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import { API_URLS } from '../apiConfig';
import ReservationCompletedMsj from '../components/ReservationCompletedMsj';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { TEXT_DESCRIPTIONS } from '../resources/TextDescriptions';

const ConfirmationPage = () => {
    const reservation = useSelector((state) => state.reservation);
    const [customerName, setCustomerName] = useState('');

    const [reservationFinished, setReservationFinished] = useState(false);
    const [reservationCode, setReservationCode] = useState('');
    
    const [limitedDate, setLimitedDate] = useState('');
    
    useEffect(() => {
        // Función para calcular la fecha actual y sumarle 2 días
        const calculateLimitedDate = () => {
            const currentDate = new Date();
            const twoDaysLater = new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000); // Añade 2 días en milisegundos
            // const formattedDate = `${twoDaysLater.getFullYear()}-${(twoDaysLater.getMonth() + 1).toString().padStart(2, '0')}-${twoDaysLater.getDate().toString().padStart(2, '0')}`; // Formatea la fecha como YYYY-MM-DD
            const formattedDate = format(twoDaysLater,"dd 'de' MMMM", { locale: es });
            return formattedDate;
        };

        // Establecer el valor inicial de limitedDate
        setLimitedDate(calculateLimitedDate());
    }, []);

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
                    <div className="flex flex-col w-full items-center space-y-2 mb-4">
                        <label className="text-2xl font-bold text-gray-900 md:text-3xl">Finaliza tu reservación</label>
                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex flex-col space-y-1 w-4/5 px-3 mb-3">
                            {/* <label className="xl:text-xl sm:text-lg font-semibold text-gray-900">Fecha seleccionada: 30 / Marzo / 2024</label> */}
                            <label className="xl:text-xl sm:text-lg font-semibold text-gray-900">Fecha seleccionada: {reservation.dateFormatted}</label>
                            <label className="xl:text-xl sm:text-lg font-semibold text-gray-900">Costo de la reserva: {TEXT_DESCRIPTIONS.BOOKING_COST}</label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="w-4/5 px-3">
                            <label className="text-sm font-normal text-gray-700">Para que su reserva sea confirmada debe pagar el <span className='font-medium'>50%</span> del costo total antes del <span className='font-medium'>{limitedDate}</span>, de lo contrario su reserva será cancelada, el pago del anticipo debe realizarse en el local.</label>
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
                            <div className="flex justify-between">
                                <Link to="/" className='w-1/2 pr-2'>
                                    <button type="button"
                                            className="w-full bg-gray-300 hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 text-gray-700 font-medium rounded-lg py-2.5 text-sm mr-2">Cancelar</button>
                                </Link>
                                <button type="button"
                                        onClick={() => handleSaveReservation()}
                                        className="w-1/2 pl-2 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 text-sm">Reservar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {reservationFinished &&
                <ReservationCompletedMsj reservationCode={reservationCode} limitedDate={limitedDate}/>
            }
        </>
    );
}

export default ConfirmationPage;