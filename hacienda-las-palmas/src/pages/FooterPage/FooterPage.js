import {TEXT_DESCRIPTIONS} from '../../resources/TextDescriptions';
import { API_URLS, ID_HALL } from '../../apiConfig';
import { FaFacebook } from "react-icons/fa";
import './FooterPage.css'

const FooterPage = () => {
    const idHacienda = 1;
    const styleFooterHacienda = 'bg-sky-950 text-white py-6';
    const styleFooterFinca = 'bg-cyan-500 text-black py-6';
    const styleFooter = ID_HALL === idHacienda ? styleFooterHacienda : styleFooterFinca;

    return (
        <div className={`flex items-center justify-center h-full ${ID_HALL === idHacienda ? 'bg-sky-950' : 'bg-cyan-500'}`}>
            <footer className={styleFooter}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div>
                            <h2 className="text-lg font-semibold">Contacto</h2>
                            <p className="mt-2">
                                {TEXT_DESCRIPTIONS.ADDRESS}<br />
                                Email: {TEXT_DESCRIPTIONS.EMAIL}<br />
                                Phone: {TEXT_DESCRIPTIONS.PHONE_FORMAT}</p>
                        </div>
                        <div className='text-center'>
                            <h2 className="text-lg font-semibold">Siguenos en Facebook</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px' }}>
                                <a href={TEXT_DESCRIPTIONS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center mr-2">
                                    <FaFacebook className="mr-1" />
                                    <span>Hacienda Las Palmas</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 text-center text-sm flex flex-col items-center">
                            <img src={ID_HALL === idHacienda ? API_URLS.GET_LOGO_ES_WHITE : API_URLS.GET_LOGO_ES_BLACK} alt="Logo" className="logo-image-size mb-2" />
                            <p>Powered by eventspaces.mx</p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterPage;