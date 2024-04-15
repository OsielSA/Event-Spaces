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
import axios from 'axios';
import { GrFormSchedule } from "react-icons/gr";

const ReservationPage = () => {
	let url = API_URLS.GET_RESERVATIONS;
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
		console.log("ID_HALL", ID_HALL);
		url = API_URLS.GET_RESERVATIONS;
		console.log(url)
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
                <p className='text-lg text-center text-gray-600 '>Haz clic en el calendario para seleccionar la fecha.</p>
            </div>
			<div className="bg-white">

				<div className="border-2 border-gray-400 pt-3">
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

					<hr className="border-1 border-gray-400 mt-4 mb-3 mx-10" />
					{loading && (
						<LoadingCalendar />
					)}
					{!loading && (
						<CompactCalendar onSelectDate={handleDateChange} />
					)}

					<div className="flex flex-col w-full text-right mb-4">
						<Link to="/confirmation" className='w-full'>
							<div className='mr-3'>
								<button type="button"
									onClick={addRervationState}
									className="xl:w-auto mt-2 xl:mt-0 px-6 py-2.5 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg text-sm">
									<label className='flex'><span className='text-xl'><GrFormSchedule /></span> Reservar</label>
								</button>
							</div>
						</Link>
					</div>
				</div>

			</div>
		</>
    );
}

export default ReservationPage;