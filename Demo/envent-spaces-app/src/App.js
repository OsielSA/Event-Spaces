import React, { useState } from "react";
import MainHeader from './components/MainHeader';
import Calendar from 'rsuite/Calendar';

import 'rsuite/Calendar/styles/index.css';
import './App.css';

function App() {
  const [value, setValue] = useState(new Date());
  const disabledDate = (date) => {
    const currentDate = new Date();
    // Devuelve true si la fecha es anterior a la fecha actual
    return date < currentDate;
  };
  return (
    <section>
      <header>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      </header>
        <div >
          <MainHeader></MainHeader>
          <Calendar></Calendar>
          <Calendar
            value={value}
            onChange={setValue}
            disabledDate={disabledDate}
          />
        </div>
      
    </section>
  );
}

export default App;
