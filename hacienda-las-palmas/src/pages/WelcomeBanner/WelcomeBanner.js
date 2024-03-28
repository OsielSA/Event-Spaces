import React from 'react';
import { TEXT_DESCRIPTIONS } from '../../resources/TextDescriptions';

const WelcomeBanner = ({ scrollToCalendar }) => {
    const urlImage = '/Fotos/welcome-photo.jpg';
    return (
        <div className="relative bg-cover bg-center text-white py-16 px-8">
            {/* Capa de imagen de fondo con filtro de desenfoque */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${urlImage})`,
                    filter: 'blur(5px)', // Ajusta la intensidad del difuminado según sea necesario
                }}
            ></div>
            {/* Capa de superposición para oscurecer la imagen */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Contenedor de texto */}
            <div className="relative max-w-4xl mx-auto z-5">
                <h2 className="text-4xl font-bold mb-4">{TEXT_DESCRIPTIONS.HALL_NAME}</h2>
                <p className="text-lg mb-6">{TEXT_DESCRIPTIONS.WELCOME_TEXT}</p>
                <a
                    href="#"
                    className="inline-block rounded bg-sky-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-600"
                    onClick={() => scrollToCalendar()}
                >
                    Reserva Ahora
                </a>
            </div>
        </div>
    );
};

export default WelcomeBanner;
