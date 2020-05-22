import { put, call, takeLatest  } from 'redux-saga/effects'

import { 
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT
} from "../../const/actionTypes";

import { apiCall } from '../../services/services.config' //import services.config

/*
export const authSignup = (username, email, password, passwordConfirmation) => {
  return dispatch => {
      dispatch(authStart());
      axios.post(baseURL+'registration/', {
          username,
          email,
          password,
          passwordConfirmation
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

export function* authSignUp( {payload} ){
  try {
    console.log(payload)

    const  {
      username,
      email,
      password,
      passwordConfirmation
    } = payload
    
    const user = yield call(apiCall,
      'registration', //url
      { 
        username,
        email,
        password1: password,
        password2: passwordConfirmation  
      },        //data
      null,     //headers
      'POST'    // method
    )

    yield put({ type: AUTH_SUCCESS })

  } catch (error) {
    console.log(error)
    yield put({ type: AUTH_FAIL, error })
  }
}

export default function* auth(){
  yield takeLatest(AUTH_START, authSignUp)
}