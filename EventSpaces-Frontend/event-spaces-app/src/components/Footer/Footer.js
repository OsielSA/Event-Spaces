import { FaInstagram } from "react-icons/fa";
// import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-center h-full bg-evsp-500">
                <footer className="bg-evsp-500 text-white py-6">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className='text-center'>
                            <h2 className="text-lg font-semibold">Siguenos en Instagram</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px' }}>
                                <a href='https://www.instagram.com/eventspaces.mx?igsh=cWR0aWI4NzNoMTZo&utm_source=qr' target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 flex items-center mr-2">
                                    <FaInstagram className="mr-1" />
                                    <span>Event Spaces</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer