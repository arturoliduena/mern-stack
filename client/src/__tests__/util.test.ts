import { getToken } from '../util/selector';

describe('util selectors', () => {
  it('getToken', () => {
    const state = {
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
    }
    expect(getToken(state)).toEqual(null);
  });
});