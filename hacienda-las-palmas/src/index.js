import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CustomProvider } from 'rsuite';
import es_ES from 'rsuite/locales/es_ES';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomProvider locale={es_ES}>
        <App />
      </CustomProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
