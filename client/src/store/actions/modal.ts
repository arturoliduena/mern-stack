import {
  ModalActionTypes, 
  OPEN_MODAL_LOGIN, 
  CLOSE_MODAL_LOGIN, 
  OPEN_MODAL_REGISTER, 
  CLOSE_MODAL_REGISTER, 
} from './actionTypes';

export const openModalLogin = (): ModalActionTypes => ({
  type: OPEN_MODAL_LOGIN,
});

export const closeModalLogin = (): ModalActionTypes => ({
  type: CLOSE_MODAL_LOGIN
});

export const openModalRegister = (): ModalActionTypes => ({
  type: OPEN_MODAL_REGISTER,
});

export const closeModalRegister = (): ModalActionTypes => ({
  type: CLOSE_MODAL_REGISTER,
});