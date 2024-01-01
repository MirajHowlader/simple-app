import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'milligram/dist/milligram.css'
import './assets/css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

