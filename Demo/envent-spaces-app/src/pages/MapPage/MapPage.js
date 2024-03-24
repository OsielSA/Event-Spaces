import React from "react";
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2701645885417!2d-107.7066946!3d24.7646481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b8e85842b1a6a7%3A0x7f8f7a9bfa18487f!2sInstituto%20Tecnol%C3%B3gico%20de%20Culiac%C3%A1n!5e0!3m2!1ses!2smx!4v1647831366783!5m2!1ses!2smx"
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
