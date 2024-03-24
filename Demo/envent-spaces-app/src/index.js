import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CustomProvider } from 'rsuite';
import es_ES from 'rsuite/locales/es_ES';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider locale={es_ES}>
      <App />
    </CustomProvider>
  </React.StrictMode>
);
reportWebVitals();
