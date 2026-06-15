import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/app.css';
import Pokemetrix from './Pokemetrix';
import BuyMeCoffee from './BuyMeCoffee';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BuyMeCoffee />
    <Pokemetrix />
  </React.StrictMode>
);
