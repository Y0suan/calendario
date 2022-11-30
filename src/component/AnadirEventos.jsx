import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import añadirEvento from '../funciones/añadirEvento';

const ContForm = styled.div`
display: flex;
width: 100%;

flex-direction: column;
align-items: center;
h2{
  margin: 20px;
  font-size: 50px;
  color: gray;
}
#formEventoNuevo{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#contInput{
  display: flex;
  flex-direction: column;
  margin: 20px;
  label{
    font-size: 20px;
  }
  input{
    min-width: 230px;
    height: 40px;
    border-radius: 15px;
    border-color: transparent;
    background-color: #c1c1c1;
  }
}
button{
    height: 40px;
    width: 50%;
    border-radius: 15px;
    border-color: transparent;
    background-color: blue;
    color: white;
    margin: 10px;
    cursor: pointer;
}

`

const AnadirEventos = ({isAñadirEvento , setAñadirEvento})=>{


  function añadirEvento(){

   

    //obtener la informacion del formularo
    const titulo =document.getElementById("titulo").value;
    const detalles =document.getElementById("detalles").value;
    const observaciones =document.getElementById("observaciones").value;
    const lugar =document.getElementById("lugar").value;
    const fechaInit =document.getElementById("fechaInit").value;
    const horaInit =document.getElementById("horaInit").value;
    const organiza =document.getElementById("organiza").value;
    const contac =document.getElementById("contac").value;
    const estado =document.getElementById("estado").value;


    //enviar  la  informacion a firebase
    const infoEvento = {titulo,detalles,observaciones,lugar,fechaInit,horaInit,organiza,contac,estado};
    añadirEvento(infoEvento);

  }
  // const[isAñadirEvento,setIsAñadirEvento]=React.useState(false);


  return (
    <ContForm>
        <h2>Añadir Evento</h2>
        <form id='formEventoNuevo'>

            <div id='contInput'>
            <label>Titulo</label>
            <input type="text" id='titulo' />
            </div>
            <div id='contInput'>
            <label>Detalles</label>
            <input type="text" id='detalles'/>
            </div>
            <div id='contInput'>
            <label>Observaciones</label>
            <input type="text" id='observaciones' />
            </div>
            <div id='contInput'>
            <label>Lugar</label>
            <input type="url" id='lugar' />
            </div>
            <div id='contInput'>
            <label>Fecha de Inicio</label>
            <input type="date" id='fechaInit' />
            </div>
            <div id='contInput'>
            <label>Hora de inicio</label>
            <input type="time" id='horaInit'/>
            </div>
            <div id='contInput'>
            <label>Organiza</label>
            <input type="text" id='organiza' />
            </div>
            <div id='contInput'>
            <label>Tel contacto</label>
            <input type="num" id='contac' />
            </div>
            <div id='contInput'>
            <label>Estado</label>
            <input type="text" id='estado' />
            </div>
            <div id='contInput'>
            <label>Estado</label>
            <input type="text"  />
            </div>

        </form>
        <button type='submit' onClick={añadirEvento}>Guardar</button>
    </ContForm>
  )
}

export default AnadirEventos