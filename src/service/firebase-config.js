
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

/** codigo de ejemplo para leer datos
 * import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import db from './service/firebase-config';
import './App.css';

function App() {
  useEffect(()=>{
    const obtenerDatos = async()=>{
      const datos = await getDocs(collection(db,'usuarios'));
      console.log(datos.docs[0].data());
    }
    obtenerDatos();
  },[]);
  return (
    <div className="App">
      <p>hola</p>
    </div>
  );
}

export default App;
 */