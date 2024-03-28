import React from "react";
import { TEXT_DESCRIPTIONS } from "../../resources/TextDescriptions";
import './MapPage.css'
function MapPage() {
  return (
    <>
      <div className='title-div'>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Encuéntranos Aquí</h2>
        <p className="text-gray-500 mt-4">Nos encontramos en el corazón de la ciudad, listos para dar la bienvenida a tus eventos más especiales! Nuestro conveniente y céntrico ubicación te brinda fácil acceso a nuestro salón de eventos, donde la magia y la celebración se encuentran en cada esquina. ¡Ven y descubre cómo hacer realidad tus sueños está más cerca de lo que imaginas!</p>
      </div>
      <div className="map-page">
        <div className="map-container">
          <iframe
            title="Ubicación"
            src={TEXT_DESCRIPTIONS.GOOGLE_MAPS_LINK}
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default MapPage;
