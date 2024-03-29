import React from "react";
import { TEXT_DESCRIPTIONS } from "../../resources/TextDescriptions";
import './MapPage.css'
function MapPage() {
  return (
    <>
      <div style={{ marginTop: "60px", marginBottom: "15px" }}>
        <h2 className='text-3xl font-bold mb-2 text-center text-sky-950'>Encuéntranos Aquí</h2>
        <p className='text-lg text-gray-600 '>Nos encontramos por el Bulevar Leonismo Internacional S/N Colonia la Teneria, Navolato Sinaloa. ¡Listos para dar la bienvenida a tu evento!</p>
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
