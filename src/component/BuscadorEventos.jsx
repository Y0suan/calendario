
import React from 'react';
import styled from 'styled-components';
import getAllEventos from '../funciones/getAuthProducts';
import { useState } from 'react';



const ContBuscador = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CartEvento = styled.div`
width: 330px;
min-width: 230px;
height: 350px;

display: flex;
flex-direction: column;
border-radius: 15px;
box-sizing: border-box;
margin-top: 20px;
#img{
    width: 100%;
    height: 50%;
    background-color: #7766c6;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
#info{
    position: relative;
    background-color: aqua;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    font-size: 15px;

    h3{
        padding: 5px;
    }
    p{
        padding: 5px;
    }
    a{
        padding: 5px;
    }

}
#fecha{
   position: absolute;
   bottom: 90%;
   left: 10px;
   padding: 15px 10px;
   background-color: antiquewhite;
   border-radius: 10px;
   h2{

   }
}
`

const BuscadorEventos = () => {


  const [eventos,setEventos]= React.useState([]);
  
  function actualizarEstadoEventos(){
    getAllEventos().then((eventos)=>{
        setEventos(eventos);
    });
  }


  React.useEffect(()=>{
    actualizarEstadoEventos();
  },[])

  return (
    <ContBuscador>
        <form id='buscador' >
            <input type="text" placeholder='Buscar Eventos'/>
            <button type='submit' >Buscar</button>
        </form>
      
        {eventos && eventos.map((evento,index)=>(

           <CartEvento key={index} >  
                <div id='img'></div>
            <div id='info'>
                <div id='fecha'><h2>{evento.fecha}</h2></div>
                <h3> {evento.titulo} </h3>
                <p> {evento.descripcion} </p>
                <div><a href= {evento.ubicacion} >ubicacion</a><a href="">mas info</a></div> 
            </div>
           </CartEvento>
        )
        )}




    </ContBuscador>
  )
}

export default BuscadorEventos