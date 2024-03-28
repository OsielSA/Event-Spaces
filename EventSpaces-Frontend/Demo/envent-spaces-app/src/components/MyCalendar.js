import React, { useState } from "react";
import esES from 'rsuite/locales/es_ES';
import { Calendar } from "rsuite";
import moment from "moment";
import './MyCalendar.css'


export default function MyCalendar({ onSelectDate }) {
  const [value, setValue] = useState(new Date());

  const handleSelectDate = (date) => {
    setValue(date);
    onSelectDate(date); // Llama a la función de devolución de llamada con la fecha seleccionada
  };

  // Lista de fechas específicas a bloquear
  const blockedDates = [
    "2024-03-20", // 20 de marzo de 2024
    "2024-03-21", // Ejemplo de otra fecha bloqueada
    "2024-04-21",
    "2024-04-01"
    // Agrega aquí más fechas en el formato "YYYY-MM-DD"
  ];

  // Función para deshabilitar fechas anteriores a la actual y las fechas bloqueadas
  const disabledDate = (date) => {
    const currentDate = moment().startOf("day");
    const targetDate = moment(date).startOf("day");
    return targetDate.isBefore(currentDate) || blockedDates.includes(targetDate.format("YYYY-MM-DD"));
  };

  // Función para renderizar las celdas del calendario y aplicar estilos personalizados
  const renderCell = (date) => {
    const targetDate = moment(date).startOf("day");
    const isBlocked = blockedDates.includes(targetDate.format("YYYY-MM-DD"));

    return (
      // <div className={`calendar-cell ${isBlocked ? "blocked-date" : ""}`}>
      <div>
        {/* {isBlocked &&
          <label>No disponible</label>
        } */}
      </div>
    );
  };
  return (
    <div className="div-calendar">
      <Calendar
        compact
        bordered
        locale={esES}
        value={value}
        onChange={setValue}
        onSelect={handleSelectDate}
        disabledDate={disabledDate}
        renderCell={renderCell}
      />
    </div>
  );
}
