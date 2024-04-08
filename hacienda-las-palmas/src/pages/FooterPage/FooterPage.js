import {TEXT_DESCRIPTIONS} from '../../resources/TextDescriptions';
import { FaFacebook } from "react-icons/fa";
import './FooterPage.css'

function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return null;
}
const FooterPage = () => {
    const logo = './Fotos/logo-event-spaces.png';
    return (
        <div className="flex items-center justify-center h-full bg-sky-950">
            <footer className="bg-sky-950 text-white py-6">
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
                            {/* <div className="flex items-center mt-2">
                                <a href={TEXT_DESCRIPTIONS.FACEBOOK} target="_blank" rel="noopener noreferrer"  className="text-white hover:text-gray-400 flex items-center mr-2">
                                    <FaFacebook className="mr-1" />
                                    <span>Hacienda Las Palmas</span>
                                </a>
                            </div> */}
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px' }}>
                                <a href={TEXT_DESCRIPTIONS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center mr-2">
                                    <FaFacebook className="mr-1" />
                                    <span>Hacienda Las Palmas</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-6 text-center text-sm flex flex-col items-center">
                            <img src={logo} alt="Logo" className="logo-image-size mb-5" />
                            <p>Powered by eventspaces.mx</p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterPage;