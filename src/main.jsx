import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlelbuSDB2c9mhxugqiw5HlzNgk3CyC20",
  authDomain: "indumentaria-cavs.firebaseapp.com",
  projectId: "indumentaria-cavs",
  storageBucket: "indumentaria-cavs.appspot.com",
  messagingSenderId: "363365797290",
  appId: "1:363365797290:web:6ed5f61b39ee99bc74afd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
