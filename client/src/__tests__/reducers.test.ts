import rootReducer from '../store/reducers';
import modalReducer from '../store/reducers/modal';
import { OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from '../store/actions/actionTypes';

describe('Initial State', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, { type: 'LOGOUT' }))
      .toEqual({
        auth: {
          authorized: false,
          error: null,
          loading: false,
          message: "",
          token: null,
          user: null,
        },
        post: {
          data: [],
        },
        favorite: [],
        modal: {
          isOpenLogin: false,
          isOpenRegister: false,
        }
      });
  });
});

describe('modal reducer', () => {
  const modalState = {
    isOpenLogin: false,
    isOpenRegister: false,
  }

  it('should handle OPEN_MODAL_LOGIN', () => {
    expect(
      modalReducer(modalState, {
        type: OPEN_MODAL_LOGIN,
      })
    ).toEqual({
      isOpenLogin: true,
      isOpenRegister: false,
    })
  });

  it('should handle CLOSE_MODAL_LOGIN', () => {
    expect(
      modalReducer(modalState, {
        type: CLOSE_MODAL_LOGIN,
      })
    ).toEqual(modalState)
  });
});