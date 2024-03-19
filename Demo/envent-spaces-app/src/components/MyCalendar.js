import React, { useState } from "react";
import { Calendar } from "rsuite";
import moment from "moment";
import "rsuite/dist/styles/rsuite-default.css";

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());

  // Función para deshabilitar la fecha 20 de marzo de 2024
  const disabledDate = (date) => {
    const currentDate = moment().startOf("day");
    const targetDate = moment("2024-03-20", "YYYY-MM-DD").startOf("day");
    return moment(date).isBefore(currentDate) || moment(date).isSame(targetDate, "day");
  };

  // Función para renderizar las celdas del calendario y aplicar estilos personalizados
  const renderCell = (date) => {
    const targetDate = moment("2024-03-20", "YYYY-MM-DD").startOf("day");
    const isTargetDate = moment(date).isSame(targetDate, "day");

    return {
      disabled: isTargetDate,
    };
  };

  return (
    <Calendar
      value={value}
      onChange={setValue}
      disabledDate={disabledDate}
      renderCell={renderCell}
    />
  );
}
