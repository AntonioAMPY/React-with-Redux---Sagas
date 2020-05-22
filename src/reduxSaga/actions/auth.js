// Recibir las acciones
import axios from 'axios';

import { 
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT
} from "../../const/actionTypes";

export const authSignUp = payload => ({
    type: AUTH_START,
    payload
})

/*
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}
*/

/*
// Dispatch para llamar a un metodo, retornada el authStart (Autentitación ya ha comenzado)
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(baseURL+'login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 1800 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token)); // Después de pasar la autenticación, le mandamos el token 
            dispatch(checkAuthTimeout(1800));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}
/* */

