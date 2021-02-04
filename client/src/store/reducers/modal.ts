import {
  ModalActionTypes,
  OPEN_MODAL_LOGIN,
  CLOSE_MODAL_LOGIN,
  OPEN_MODAL_REGISTER,
  CLOSE_MODAL_REGISTER,
} from '../actions/actionTypes';

interface ModalState {
  isOpenLogin: boolean
  isOpenRegister: boolean
}
const initialModalState: ModalState = {
  isOpenLogin: false,
  isOpenRegister: false,
}

export function modal(state: ModalState = initialModalState, action: ModalActionTypes): ModalState {
  switch (action.type) {
    case OPEN_MODAL_LOGIN:
      return {
        ...state,
        isOpenLogin: true,
      };
    case CLOSE_MODAL_LOGIN:
      return {
        ...state,
        isOpenLogin: false,
      };
    case OPEN_MODAL_REGISTER:
      return {
        ...state,
        isOpenRegister: true,
      };
    case CLOSE_MODAL_REGISTER:
      return {
        ...state,
        isOpenRegister: false,
      };
    default:
      return state
  }
};

export default modal;