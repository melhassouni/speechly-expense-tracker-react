import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from 'react-redux';
import { store } from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_KEY} >
        <App />
      </SpeechProvider>
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);


reportWebVitals();
