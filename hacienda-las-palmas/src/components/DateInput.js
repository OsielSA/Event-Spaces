import React, { useState, useEffect } from 'react';
import { FaCalendarCheck } from "react-icons/fa";

const DateInput = ({ value, onChange }) => {
    const [selectedDate, setSelectedDate] = useState(value);

    useEffect(() => {
        setSelectedDate(value);
    }, [value]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSelectedDate(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={selectedDate}
                readOnly={true}
                onChange={handleInputChange}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seleccione una fecha"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarCheck className="text-gray-400" />
            </div>
        </div>
    );
}

export default DateInput;
