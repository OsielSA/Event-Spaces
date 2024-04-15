import React, { useState } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordInput = ({ value, onChange, hasError }) => {
    const [password, setPassword] = useState(value);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setPassword(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const inputType = showPassword ? 'text' : 'password';

    return (
        <>
            <div className="flex relative">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <RiLockPasswordLine className="text-gray-400" />
                </span>
                <div className="w-full">
                    <input id="hs-toggle-password"
                           type={inputType}
                           className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:outline-none ${hasError ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                           placeholder="Ingrese la contraseña" value={password} onChange={handleInputChange} />
                    <button type="button" onClick={toggleShowPassword} className="absolute top-0 end-0 p-3.5 rounded-e-md">
                        {showPassword ? <AiFillEyeInvisible className="text-gray-400" /> : <AiFillEye className="text-gray-400" />}
                    </button>
                </div>
            </div>
            {hasError &&
                <div className="text-red-600 mt-1 ml-3">Contraseña incorrecta</div>
            }

        </>

    );
};

export default PasswordInput;
