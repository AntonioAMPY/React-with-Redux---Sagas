import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {authSignUp} from '../reduxSaga/actions/auth'


const Formulario = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authSignUp({ username:'prueba3', email: 'hola@gmail.com', password:'root789789', passwordConfirmation: 'root789789' }))
        console.log(dispatch);
    }, [])

    return ( 
        <form>
            <label>Ingrese su usuario</label>
            <input
                placeholder="Ingrese su usuario"
                type="text"
            ></input>
            <br/>
            <label>Ingrese su contraseña</label>
                <input
                placeholder="Ingrese su contraseña"
                    type="password"
            ></input>
        </form>
    );
}

 
export default Formulario;