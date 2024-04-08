import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DescriptionPage from "./pages/DescriptionPage";
import ReservationPage from "./pages/ReservationPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import MapPage from "./pages/MapPage/MapPage";
import WelcomeBanner from "./pages/WelcomeBanner/WelcomeBanner";
import FooterPage from "./pages/FooterPage/FooterPage";

import 'rsuite/Calendar/styles/index.css';
import './App.css';

function App() {
  const descriptionRef = useRef(null);
  const calendarRef = useRef(null);
  const mapRef = useRef(null);
  const logo = 'Fotos/logo.png';

  const scrollToRef = (ref) => {
    try{
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  }
  catch{
    return;
  }
  };

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
      {/* <nav className="navbar fixed top-0 bg-yellow-950 w-full p-4 z-10 shadow-md"> */}
      <nav className="navbar fixed top-0 bg-sky-950 w-full p-4 z-10 shadow-md">
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
        {/* WelcomeBanner y DescriptionPage en la ruta '/' */}
        <Routes>
          <Route path="/" element={
            <div>
              <div className="mt-8">
                <WelcomeBanner scrollToCalendar={() => scrollToRef(calendarRef)} />
              </div>
              <div className="max-w-screen-lg mx-auto pt-16">
                <div ref={descriptionRef}>
                  <DescriptionPage scrollToCalendar={() => scrollToRef(calendarRef)} />
                </div>
                <div className="px-8 py-6" ref={calendarRef}>
                  <ReservationPage />
                </div>
                <div ref={mapRef} className="px-8 py-6">
                  <MapPage />
                </div>
              </div>
            </div>
          } />
          {/* ConfirmationPage en la ruta '/confirmation' */}
          <Route path="/confirmation" element={
            <div className="div-confirmation-page">
              <div className="max-w-screen-lg mx-auto pt-16">

              <ConfirmationPage />
              </div>
            </div>
          } />
        </Routes>
        {/* FooterPage siempre visible */}
        <div className="div-footer">
          <FooterPage />
        </div>
      </div>
    </Router>
  );
}

export default App;
