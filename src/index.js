import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feature from "./Feature";
import Modal from "./Modal";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Feature />
    <Modal/>
  </React.StrictMode>
);

