import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-w9_dbiwt2obXeLEsZOKA5rsmScrKjE4",
    authDomain: "hollow-knight-67815.firebaseapp.com",
    projectId: "hollow-knight-67815",
    storageBucket: "hollow-knight-67815.appspot.com",
    messagingSenderId: "220070182229",
    appId: "1:220070182229:web:5b5ec415774b433b7b03dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

