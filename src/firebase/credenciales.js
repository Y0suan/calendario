// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBcUeWH-FEVsBkgMHAVVr15UNoCgVi6zEE",
  authDomain: "calendario-de203.firebaseapp.com",
  projectId: "calendario-de203",
  storageBucket: "calendario-de203.appspot.com",
  messagingSenderId: "1064766249998",
  appId: "1:1064766249998:web:cd1928b15533d365d9f05f",
  measurementId: "G-W8Q9NTJ0F0"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
