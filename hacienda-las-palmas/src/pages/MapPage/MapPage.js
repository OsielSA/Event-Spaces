import React from "react";
import { TEXT_DESCRIPTIONS } from "../../resources/TextDescriptions";
import { TbMapShare } from "react-icons/tb";
import './MapPage.css'

function MapPage() {
  return (
    <>
      <div style={{ marginTop: "60px", marginBottom: "15px" }}>
        <h2 className='text-3xl font-bold mb-2 text-center text-sky-950'>Encuéntranos Aquí</h2>
        <p className='text-lg text-gray-600 '>{TEXT_DESCRIPTIONS.ADDRESS_DESCRIPTION}</p>
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
      <div className="flex flex-col w-full text-right mb-4">
        <div className='my-3'>
          <a href={TEXT_DESCRIPTIONS.GOOGLE_MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer">
            <button type="button"
              className="xl:w-auto mt-2 xl:mt-0 px-6 py-2.5 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg text-sm">
              <label className='flex'><span className='text-xl mr-1'><TbMapShare /></span> Ir a Google Maps</label>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MapPage;
