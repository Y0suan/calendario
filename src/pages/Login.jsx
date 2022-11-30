import React from 'react';
import styled from 'styled-components';
import loginEmailPasword from '../funciones/loginEmailPasswor';

const ContLogin = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
   form{
    padding: 20px;
    background-color: #75ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        max-width: 230px;
        margin-top: 10px;
    }
    button{
        max-width: 130px;
        margin-top: 20px;
    }
   }
`
function Login(){



    async function submitHandler(e){
        e.preventDefault();
        const correo = document.getElementById("correo").value;
        const contra = e.target.contra.value;

        await loginEmailPasword(correo,contra);

    }



  return (
    <ContLogin>
        <h1>Inicia sesion</h1>
        <form onSubmit={submitHandler} >
            <div  >
                <label>Correo</label>
                <input  type="email" id='correo'/>
            </div>
            <div  >
                <label>Contraseña</label>
                <input  type="password" id='contra'/>
            </div>
            <button type="submit">Ingresar</button>
        </form>
    </ContLogin>

  )
}

export default Login