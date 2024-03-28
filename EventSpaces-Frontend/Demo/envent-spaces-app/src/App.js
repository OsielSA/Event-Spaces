import React, { useRef } from "react";
import DescriptionPage from "./pages/DescriptionPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import MapPage from "./pages/MapPage/MapPage";
import PackagesPage from "./pages/PackagesPage";
import WelcomeBanner from "./pages/WelcomeBanner/WelcomeBanner";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

import 'rsuite/Calendar/styles/index.css';
import './App.css';

function App() {
  const descriptionRef = useRef(null);
  const calendarRef = useRef(null);
  const mapRef = useRef(null);
  const logo = 'Fotos/logo.png';

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth" // Aquí se especifica el comportamiento de desplazamiento suave
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="navbar fixed top-0 bg-gray-800 w-full p-4 z-10 shadow-md">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          <img src={logo} alt="Logo" className="logo-image-size" /> {/* Mostrar el logo como una imagen */}
          <ul className="flex space-x-4">
            <li>
              <button className="btn text-white" onClick={() => scrollToRef(descriptionRef)}>Galería</button>
            </li>
            <li>
              <button className="btn text-white" onClick={() => scrollToRef(calendarRef)}>Reservar</button>
            </li>
            <li>
              <button className="btn text-white" onClick={() => scrollToRef(mapRef)}>Ubicación</button>
            </li>
          </ul>
        </div>
      </nav>
        <div className="mt-8">
          <WelcomeBanner scrollToCalendar={() => scrollToRef(calendarRef)} />
        </div>
      <div className="max-w-screen-lg mx-auto pt-16">
        <div ref={descriptionRef}>
          <DescriptionPage scrollToCalendar={() => scrollToRef(calendarRef)} />
        </div>
        <div className="px-8 py-6">
          <ServicesPage />
        </div>
        <div ref={calendarRef} className="px-8 py-6">
          <ReservationPage />
        </div>
        <div ref={mapRef} className="px-8 py-6">
          <MapPage />
        </div>
      </div>
    </div>
  );
}

export default App;
