import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  SIGNUP,
  SET_AUTH,
  ME_AUTH,
} from './actionTypes';
import { IAuth } from '../../types';

export const login = (user: { email: string, password: string}): AuthActionTypes => ({
  type: LOGIN,
  user
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const signup = (user: {email: string, password: string}): AuthActionTypes => ({
  type: SIGNUP,
  user
});

export const setAuth = (payload: IAuth): AuthActionTypes => ({
  type: SET_AUTH,
  payload
});

export const meAuth = (): AuthActionTypes => ({
  type: ME_AUTH,
});