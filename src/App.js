import logo from './logo.svg';
import fondo from './assets/images/fondo.svg'
import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import db from './service/firebase-config';
import './App.css';

function App() {
  return (
    <div className="App-body">
      <div className='App-header'>
        <p className='App-button button-2'>QUIERO UNIRME</p>
        <p className='App-button button-1'>SOY PARTE</p>
        <p>- Inicio rapido -</p>
        <p className='App-name'>NOTLAR</p>
      </div>
      <p className='App-slogan'>Una herramienta para administrar tus ideas, tiempo y medir el progreso de tus metas.</p>
      <div className='App-main'>
        <img src={fondo} className="App-logo" alt="logo" />
        <p className='App-text'>Espacio vacio por falta de imaginación, vuelva mas tarde :D</p>
      </div>
    </div>
  );
}

export default App;
