import React from 'react';
import cerrarSesion from '../funciones/cerrarSesion';

import styled from 'styled-components';

const Nav = styled.nav`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 10vh;
  box-shadow:  rgba(50,50,93,0.23) 0 30px 30px -20px;
  line-height: 10vh;
  h3{
    margin-left: 10px;
    font-size: 30px;
    width: 30%;
  }
  ul{
    display: flex;
    justify-content: flex-end;
    justify-content: space-around;
    width: 70%;
    padding-left: 20px;
  }
  li{
    text-decoration: none;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
    font-size: 20px;
    /* padding: 0 10px;
    margin: 0 10px; */
    text-transform: capitalize;
  }
  button{
    font-size: 20px;
    margin-left: 2rem;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
  @media (max-width:768px) {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3{
        font-size: 20px;
        width:50% ;
    }
    .mobile{
      display  :none ;
    }
  }

`;

const NavBar = () => {
  return (
    <Nav>

        <h3>Calendario Eldorado</h3>

        <ul className='mobile'>
            <li><a href="../pages/Home">Home</a></li>
            <li><a href="../pages/NuevoEvento">Nuevo Evento</a></li> 
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Usuarios</a></li> 

            <button  onClick={cerrarSesion} >Cerrar sesion</button>      
        </ul>

        
    </Nav>
  )
}

export default NavBar