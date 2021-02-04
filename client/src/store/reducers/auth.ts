import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  SIGNUP,
  SET_AUTH,
  ME_AUTH,
} from '../actions/actionTypes';
import { IAuth } from '../../types';

interface AuthState {
  user: IAuth['user'],
  authorized: IAuth['authorized'],
  message: IAuth['message'],
  error: IAuth['error'],
  loading: boolean,
  token: IAuth['token']
}
const initialStateAuth: AuthState = {
  user: null,
  authorized: false,
  message: '',
  error: null,
  loading: true,
  token: null,
};

function character(state: AuthState = initialStateAuth, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
    case ME_AUTH:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT:
      return {
        ...state,
        ...initialStateAuth,
        loading: false,
      }
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default character;