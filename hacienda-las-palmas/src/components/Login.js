import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import { FaRegUser } from "react-icons/fa";

const Login = ({ authenticate }) => {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);
    const handlePasswordChange = (newValue) => {
        setPassword(newValue);
        setErrorPassword(false);
      };


    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí verificarías si la contraseña es correcta, en este caso, simplemente lo estableceremos como "admin123"
        if (password === 'admin123') {
            
            authenticate();
        } else {
            setErrorPassword(true);
            // alert('Contraseña incorrecta');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="relative max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div>
                    <h2 className='mb-4 text-center text-xl font-bold text-sky-950'>Iniciar Sesion</h2>
                    <form onSubmit={handleLogin}>
                        <div className='mb-4'>
                            <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                            <div class="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <FaRegUser className="text-gray-400" />
                                </span>
                                <input type="text" disabled={true} value="Admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>
                        </div>
                        <div>
                        <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <PasswordInput value={password} onChange={handlePasswordChange} hasError={errorPassword} />
                        </div>
                        <button type="submit" className="w-full  mt-5 px-4 py-2.5 bg-sky-950 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg  text-sm">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;