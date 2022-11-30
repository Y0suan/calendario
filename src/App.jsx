import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import firebaseApp from './firebase/credenciales';
import {getAuth,onAuthStateChanged} from "firebase/auth"
const auth = getAuth(firebaseApp);


function App() {
  const [usuario,setUsuario]= React.useState(null)


  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase);
    }else{
      setUsuario(null);
    }
  })



  return (

    <div> {usuario ? <Home/> : <Login/>} </div>
   
  )
}

export default App
