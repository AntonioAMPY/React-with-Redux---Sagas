import { combineReducers } from 'redux';
import auth from './auth';//import auth auth.reducer

const rootReducer = combineReducers({
  auth
})

export default rootReducer