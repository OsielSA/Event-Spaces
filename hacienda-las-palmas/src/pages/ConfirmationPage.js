import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { TEXT_DESCRIPTIONS } from '../resources/TextDescriptions';
import { API_URLS } from '../apiConfig';
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { es } from 'date-fns/locale';
import PackageSelector from '../components/PackageSelector';
import ReservationCompletedMsj from '../components/ReservationCompletedMsj';
import LoadingReservation from '../components/LoadingReservation';
import axios from 'axios';


function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return null;
}

const ConfirmationPage = () => {
    const reservation = useSelector((state) => state.reservation);
    const navigate  = useNavigate ();
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    const [loadingReservation, setLoadingReservation] = useState(false)
    const [reservationFinished, setReservationFinished] = useState(false);
    const [reservationCode, setReservationCode] = useState('');
    const [enteredEmail, setEnteredEmail] = useState(false);

    const [limitedDate, setLimitedDate] = useState('');

    useEffect(() => {
        if (!reservation.reservationDate) {
            navigate("/");
            // console.log("/");
        }

        // Función para calcular la fecha actual y sumarle 2 días
        const calculateLimitedDate = () => {
            const currentDate = new Date();
            const oneDayLater = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // Agrega 24 horas en milisegundos
            // const twoDaysLater = new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000); // Añade 2 días en milisegundos
            const formattedDate = format(oneDayLater,"dd 'de' MMMM", { locale: es });
            return formattedDate;
        };

        // Establecer el valor inicial de limitedDate
        setLimitedDate(calculateLimitedDate());

        loadPackages();
    }, []);

    const [packagesList, setPackagesList] = useState([]);
    const loadPackages = async () => {
        try {
            var url = API_URLS.GET_PACKAGES;
			const response = await axios.get(url);
            setPackagesList(response.data);
		}
		catch (error){
			console.log(error)
			alert("Hubo un error al cargar los paquetes")
		}
    };

    const handleCustomerName = (event) => { setCustomerName(event.target.value); }
    const handleCustomerEmail = (event) => { setCustomerEmail(event.target.value); }

    const[hasErrorName, setHasErrorName] = useState(false);
    const[hasErrorPackage, setHasErrorPackage] = useState(false);
    const inputClass = hasErrorName ? 'border-red-500' : 'border-gray-300';
    const handleSaveReservation = () => {
        var bandError = false;
        if(!customerName){
            setHasErrorName(true);
            bandError = true;
        }
        if(!selectedPackage){
            setHasErrorPackage(true);
            bandError = true;
        }
        if(customerEmail){
            setEnteredEmail(true);
        }
        if(bandError){
            setTimeout(() => {
                setHasErrorName(false);
                setHasErrorPackage(false);
            }, 2000);
            return;
        }
        const parameters = {
            idHall: reservation.idHall,
            idPackage: selectedPackage,
            codeReservation: '',
            customerName: customerName,
            reservationStatus: 1,
            reservationConfirmed: '',
            reservationDate: reservation.reservationDate,
            email: customerEmail
        }
        console.log(parameters)
        saveReservation('POST', parameters)

    };

    const saveReservation = async(method, parameters) => {
        try{
            setLoadingReservation(true);
            // await new Promise(r => setTimeout(r, 2000));
            const response = await axios({ method: method, url: API_URLS.SAVE_RESERVATION, data: parameters });
            if (response.status === 201) { // Created
                setReservationFinished(true);
                setReservationCode(response.data.codeReservation)
            } else {
                alert("Error al guardar la reserva. Por favor, inténtelo de nuevo.");
            }
            setLoadingReservation(false);
        }
        catch(error){
            console.error("Error al guardar la reserva:", error);
            alert("Hubo un problema al intentar guardar la reserva. Por favor, inténtelo de nuevo más tarde.");
            setLoadingReservation(false);
        }
    }


    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleSelectPackage = (idPackage) => {
        setSelectedPackage(idPackage);
    };

    // Actualizar el estado 'selected' en la lista de cartas
    const packagesListU = packagesList.map(pack => ({
        ...pack,
        selected: pack.idPackage === selectedPackage
    }));

    return (
        <>
            {!reservationFinished &&
                <div>
                    <div className="flex flex-col w-full items-center space-y-2 mb-4">
                        <label className="text-2xl font-bold text-gray-900 md:text-3xl">Finaliza tu reservación</label>
                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex flex-col space-y-1 w-4/5 px-3 mb-3">
                            <label className="xl:text-xl sm:text-lg font-semibold text-gray-900">
                                Fecha seleccionada:
                                <span className='text-sky-700 ml-2'>
                                    {reservation.dateFormatted}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="w-4/5 px-3">
                            <label className="text-sm font-normal text-gray-700">Para confirmar su reserva, es necesario pagar el <span className='font-medium'>50%</span> del costo total para el día <span className='font-medium'>{limitedDate}</span>. De lo contrario, su reserva será cancelada. El pago del anticipo debe realizarse en el local.</label>
                            <label className="text-sm font-normal text-gray-700">
                                Para llevar a cabo el anticipo, por favor, comuníquese al número{' '}
                                <span className='font-medium whitespace-no-wrap' style={{ whiteSpace: 'nowrap' }}>
                                    <a href={`tel:${TEXT_DESCRIPTIONS.PHONE}`}>
                                        {TEXT_DESCRIPTIONS.PHONE_FORMAT}
                                    </a>
                                </span>
                            </label>
                            {/* <label className="text-sm font-normal text-gray-700">Para que su reserva sea confirmada debe pagar el <span className='font-medium'>50%</span> del costo total antes del <span className='font-medium'>{limitedDate}</span>, de lo contrario su reserva será cancelada, el pago del anticipo debe realizarse en el local.</label> */}
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-full w-full">
                        <form className="w-4/5 p-3 bg-white border border-gray-200 rounded-lg shadow ">
                            <div className="mb-4">
                                <label for="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre <span className='text-red-500'>*</span></label>
                                <input type="text" value={customerName} onChange={handleCustomerName}
                                    id="name" name="name" className={`${inputClass} mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`} required="" />
                            </div>
                            <div className="mb-4">
                                <label for="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Seleccione una opción <span className='text-red-500'>*</span></label>
                                <PackageSelector packages={packagesListU || []} onSelect={handleSelectPackage} hasError={hasErrorPackage} />
                            </div>
                            <div className="mb-4">
                                <label for="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo <span className='text-gray-400'>(opcional)</span></label>
                                <input type="email" id="email" name="email" onChange={handleCustomerEmail}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
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
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex flex-col space-y-1 w-4/5 px-3 mb-3">
                            <label className="mt-2 text-sm font-light text-gray-600 text-right">
                                Al dar clic en reservar, acepto los términos del
                                <a href={API_URLS.GET_NOTICE_PRIVACY} target="_blank" className='ml-1 hover:text-black underline'>
                                    aviso de privacidad
                                </a>.
                            </label>
                        </div>
                    </div>
                </div>
            }
            {loadingReservation &&
                <LoadingReservation />
            }
            {reservationFinished &&
                <ReservationCompletedMsj reservationCode={reservationCode} limitedDate={limitedDate} enteredEmail={enteredEmail}/>
            }
        </>
    );
}

export default ConfirmationPage;