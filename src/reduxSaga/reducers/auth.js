// Reducer's toma el estado y return una pieza de lo que necesitamos en la app

import * as actionTypes from '../../const/actionTypes';
//import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false
}
/*
const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    })
}
/* */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: 
            return {...state}
            // return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: 
            return {...state}
            // return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: 
            return {...state}
            //return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return {...state}
            //return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;