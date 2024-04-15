import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ID_HALL, setIdHall } from "./apiConfig";
import DescriptionPage from "./pages/DescriptionPage";
import ReservationPage from "./pages/ReservationPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import MapPage from "./pages/MapPage/MapPage";
import WelcomeBanner from "./pages/WelcomeBanner/WelcomeBanner";
import FooterPage from "./pages/FooterPage/FooterPage";
import Login from "./components/Login";
import AdminPage from "./pages/AdminPage";

import 'rsuite/Calendar/styles/index.css';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  //Scroll
  const descriptionRef = useRef(null);
  const calendarRef = useRef(null);
  const mapRef = useRef(null);
  const scrollToRef = (ref) => {
    try {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth"
      });
    }
    catch {
      return;
    }
  };


  //Change Hall
  const idPalmas = 1;
  const idMarcos = 2;
  const logoPalmas = 'Fotos/logo-palmas.png';
  const logoMarcos = 'Fotos/logo-finca.png';
  const stylelogoPalmas = {width: '140px', paddingTop: '2px', paddingBottom: '2px'};
  const sylelogoMarcos = {width: '105px'};
  const styleBtnPalmasNav1 = 'btn text-white hidden sm:block';
  const styleBtnMarcosNav1 = 'btn text-black hidden sm:block';
  const styleBorderChangeHallPalmas = 'flex flex-col border-solid border-2 border-white rounded-md hover:ring-2 hover:ring-sky-700 p-1';
  const styleBorderChangeHallMarcos = 'flex flex-col border-solid border-2 border-black rounded-md hover:ring-2 hover:ring-sky-700 p-1';
  const styleBtnChangeHallPalmas = 'btn text-white';
  const styleBtnChangeHallMarcos = 'btn text-black';
  const styleBtnPalmasNav2 = 'btn text-white';
  const styleBtnMarcosNav2 = 'btn text-black';

  const [logo, setLogo] = useState(logoPalmas);
  const [styleLogo, setLogoWidth] = useState(stylelogoPalmas);
  const [btnNavBar1, setBtnNavBar1] = useState(styleBtnPalmasNav1);
  const [btnChangeHall, setBtnChangeHall] = useState(styleBtnChangeHallPalmas);
  const [borderChangeHall, setBorderChangeHall] = useState(styleBorderChangeHallPalmas);
  const [btnNavBar2, setBtnNavBar2] = useState(styleBtnPalmasNav2);
  const [reloadPage, setReloadPage] = useState(false);
  
  function handleChangeHall() {
    if(ID_HALL === idPalmas){
      setIdHall(idMarcos);
      setLogo(logoMarcos);
      setLogoWidth(sylelogoMarcos);
      setBtnNavBar1(styleBtnMarcosNav1);
      setBtnChangeHall(styleBtnChangeHallMarcos);
      setBorderChangeHall(styleBorderChangeHallMarcos);
      setBtnNavBar2(styleBtnMarcosNav2);
    }else{
      setIdHall(idPalmas);
      setLogo(logoPalmas);
      setLogoWidth(stylelogoPalmas);
      setBtnNavBar1(styleBtnPalmasNav1);
      setBtnChangeHall(styleBtnChangeHallPalmas);
      setBorderChangeHall(styleBorderChangeHallPalmas);
      setBtnNavBar2(styleBtnPalmasNav2);
    }
    setReloadPage(prevState => !prevState);
  }

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <div className="flex flex-col">
          <div className="block sm:hidden" style={{ marginTop: '5.2rem' }}>
            <nav className={`navbar fixed  w-full p-2 z-10 shadow-md" ${ID_HALL === idPalmas ? 'bg-sky-800': 'bg-cyan-500'}`}>
              <ul className="flex w-full justify-center space-x-4">
                <li className="flex justify-center">
                  <button className={btnNavBar2} onClick={() => scrollToRef(descriptionRef)}>Galería</button>
                </li>
                <li className="flex justify-center">
                  <button className={btnNavBar2} onClick={() => scrollToRef(mapRef)}>Ubicación</button>
                </li>
              </ul>
            </nav>
          </div>
          <nav className={`navbar fixed top-0 w-full p-2 z-10 shadow-lg ${ID_HALL === idPalmas ? 'bg-sky-950': 'bg-cyan-600'}`}>
            <div className="max-w-screen-lg mx-auto flex items-center justify-between">
              <div>
                <img src={logo} alt="Logo" className='logo-image-size' style={styleLogo}/>
              </div>
              <ul className="flex space-x-4">
                <li className="flex justify-center">
                  <button className={btnNavBar1} onClick={() => scrollToRef(descriptionRef)}>Galería</button>
                </li>
                <li className="flex justify-center">
                  <button className={btnNavBar1} onClick={() => scrollToRef(mapRef)}>Ubicación</button>
                </li>
                <li className={borderChangeHall}>
                  <button className={btnChangeHall} onClick={handleChangeHall}>
                    <h2 className="text-[11px]">
                      {ID_HALL === idPalmas ? 'Visita' : 'Regresar'}
                    </h2>
                    <h2 className="text-[12px]">
                      {ID_HALL === idPalmas ? 'Finca San Marcos' : 'Hacienda las Palmas'}
                    </h2>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>


        {/* WelcomeBanner y DescriptionPage en la ruta '/' */}
        <Routes>
          <Route path="/" element={
            <div>
              <div className="mt-8">
                <WelcomeBanner scrollToCalendar={() => scrollToRef(calendarRef)} />
              </div>
              <div className="max-w-screen-lg mx-auto pt-16">
                <div ref={descriptionRef}>
                  <DescriptionPage key={reloadPage} scrollToCalendar={() => scrollToRef(calendarRef)} />
                </div>
                <div className="px-8 py-6" ref={calendarRef}>
                  <ReservationPage key={reloadPage} />
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
          {/* Admin Page */}
          <Route path="/admin" element={
            <div className="div-admin-page">
              <div className="max-w-screen-lg mx-auto pt-16">
                {authenticated ? <AdminPage /> : <Login authenticate={() => setAuthenticated(true)} />}
              </div>
            </div>
          } />
        </Routes>


        <div className="div-footer">
          <FooterPage key={reloadPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
