import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewReservation } from '../redux/ReservationSlice';
import { addReservations } from '../redux/ReservationsSlice';
import { ID_HALL, API_URLS } from '../apiConfig';
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import CompactCalendar from '../components/CompactCalendar';
import LoadingCalendar from '../components/LoadingCalendar';
import DateInput from '../components/DateInput';
import axios from 'axios';

const ReservationPage = () => {
	const url = API_URLS.GET_RESERVATIONS;
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const [dateSelected, setDateSelected] = useState('');
	const [dateSelectedFormatted, setDateSelectedFormatted] = useState('');

    const handleDateChange = (newValue) => {
		const date = format(newValue,"yyyy-MM-dd");
		const formattedDate = format(newValue,"dd / MMMM / yyyy", { locale: es });
		console.log(date)
        setDateSelected(date);
        setDateSelectedFormatted(formattedDate);
    };

	const getReservations = async () => {
		try {
			const response = await axios.get(url);
			dispatch(addReservations(response.data));
			setLoading(false);
		}
		catch (error){
			console.log(error)
			alert("Hubo un error al cargar las reservaciones")
		}
	};
	useEffect ( () => {
        getReservations();
    }, []);

	const [dateError, setDateError] = useState(false);
	const addRervationState = (event) => {
		if (!dateSelected) {
			setDateError(true);
			event.preventDefault();
			setTimeout(() => {
				setDateError(false);
			}, 1000);
			return;
		}
		dispatch(addNewReservation({
			idHall: ID_HALL,
			reservationDate: dateSelected,
			dateFormatted: dateSelectedFormatted
		}
		));
	};

    return (
		<>
			<div style={{marginTop:"60px", marginBottom:"15px"}}>
                <h2 className='text-3xl font-bold mb-2 text-center text-sky-950'>Realiza tu reservación</h2>
                <p className='text-lg text-gray-600 '>¡Prepara tu próximo evento con nosotros! Reserva ahora y asegura tu lugar en nuestro calendario.</p>
            </div>
			<div className="bg-white">
				<div className="border-2 border-gray-400 pt-3">
					<div className="flex flex-col items-center sm:flex-row sm:items-center sm:ml-10">
						<DateInput value={dateSelectedFormatted} onChange={handleDateChange} className="mb-2 sm:mb-0 sm:mr-2" hasError={dateError} />
						<Link to="/confirmation" className='w-full'>
							<div className='flex flex-col items-center sm:flex-row sm:items-center xl:ml-2 sm:ml-0 '>
								<button type="button"
									onClick={addRervationState}
									className="xl:w-auto w-4/5 mt-2 xl:mt-0 px-4 py-2.5 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg  text-sm">
									Reservar
								</button>
							</div>
						</Link>
					</div>
					<hr className="border-1 border-gray-400 mt-4 mb-3 mx-10" />
					{loading && (
						<LoadingCalendar />
					)}
					{!loading && (
						<CompactCalendar onSelectDate={handleDateChange} />
					)}
				</div>
				<div className="flex items-center justify-center h-full py-2">
					<div className="flex items-center space-x-2">
						<div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
						<p className="text-sm text-gray-700 dark:text-gray-300">Pendiente de confirmar</p>
					</div>
					<div className="flex items-center space-x-2 ml-4">
						<div className="w-4 h-4 bg-red-400 rounded-full"></div>
						<p className="text-sm text-gray-700 dark:text-gray-300">Sin disponibilidad</p>
					</div>
				</div>
			</div>
		</>
    );
}

export default ReservationPage;