import React, { useState } from 'react';
import { Calendar } from 'rsuite';

const CompactCalendar = ({ onSelectDate }) => {
  const [value, setValue] = useState(new Date());

  const handleSelectDate = (date) => {
    setValue(date);
    onSelectDate(date); // Llama a la función de devolución de llamada con la fecha seleccionada
  };

  const today = new Date();
  const blockedDates = [
    new Date("2024-03-20"),
    new Date("2024-03-21"),
    new Date("2024-04-21"),
    new Date("2024-04-01")
  ];

  const limitedDates = [
    new Date("2024-03-30")
  ];

  function cellClassName(date) {
    const isBlocked = blockedDates.some(blockedDate => {
      return blockedDate.getDate() === date.getDate() &&
             blockedDate.getMonth() === date.getMonth() &&
             blockedDate.getFullYear() === date.getFullYear();
    });

    const isLimitedDate = limitedDates.some(limitedDate => {
      return limitedDate.getDate() === date.getDate() &&
             limitedDate.getMonth() === date.getMonth() &&
             limitedDate.getFullYear() === date.getFullYear();
    });

    const isPastDate = date < today;

    let className = '';

    if (isBlocked) {
      className = 'bg-red-400 cursor-not-allowed'; // Aplicar clase CSS para fechas bloqueadas
    } else if (isLimitedDate) {
      className = 'bg-yellow-200'; // Aplicar clase CSS para fechas limitadas
    }
    // else if (isPastDate) {
    //   className = 'bg-gray-300 cursor-not-allowed'; // Aplicar clase CSS para fechas pasadas
    // }

    return className;
  }

  const disabledDate = date => {
    return date < today || blockedDates.some(blockedDate => {
      return blockedDate.getDate() === date.getDate() &&
             blockedDate.getMonth() === date.getMonth() &&
             blockedDate.getFullYear() === date.getFullYear();
    });
  };

  return (
    <div className='div-calendar'>
      <Calendar
        compact
        bordered
        onChange={setValue}
        onSelect={handleSelectDate}
        cellClassName={cellClassName}
        disabledDate={disabledDate} />
    </div>
  );
};

export default CompactCalendar;
