import React, { useState } from 'react';
import { spacing } from 'tailwindcss/defaultTheme';
import MyCalendar from "../../components/MyCalendar";
import DateInput from '../../components/DateInput';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import './ReservationPage.css'
import CompactCalendar from '../../components/CompactCalendar';

const ReservationPage = () => {
	const [date, setDate] = useState('');

    const handleDateChange = (newValue) => {
		const formattedDate = format(newValue,"dd / MMMM / yyyy", { locale: es });
        setDate(formattedDate);
    };

    return (
		<>
			<div className='title-div'>
				<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Realiza tu reservación</h2>
				<p className="text-gray-500 mt-4">¡Prepara el escenario para tu próximo gran evento! En nuestro exclusivo salón de eventos, cada ocasión se convierte en un momento inolvidable, estamos aquí para hacer tus sueños realidad. Reserva ahora y asegura tu lugar en nuestro calendario lleno de momentos especiales. ¡No esperes más para crear recuerdos inolvidables!</p>
			</div>
			<div className="bg-white">
				<div className="border-2 border-gray-400 pt-3">
					<div className="flex flex-col items-center sm:flex-row sm:items-center sm:ml-10">
						<DateInput value={date} onChange={handleDateChange} className="mb-2 sm:mb-0 sm:mr-2" />
						<a className="xl:w-auto w-4/5 xl:mt-0 xl:ml-2 md:mt-0 mt-2 inline-block rounded bg-sky-950 px-6 py-2 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-600">
							Reservar
						</a>
					</div>


					<hr className="border-1 border-gray-400 mt-4 mb-3 mx-10" />
					<CompactCalendar onSelectDate={handleDateChange} />
					{/* <MyCalendar onSelectDate={handleDateChange} /> */}
				</div>
				<div className="flex items-center justify-center h-full py-2">
					<div className="flex items-center space-x-2">
						<div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
						<p className="text-sm text-gray-700 dark:text-gray-300">Horarios disponibles</p>
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