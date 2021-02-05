import { closeModalLogin, openModalLogin } from '../store/actions/modal';
import { getPosts } from '../store/actions/post';
import { PostActionTypes, ModalActionTypes } from '../store/actions/actionTypes';

describe('actions', () => {
  it('should create an action to open the login modal', () => {
    const expectedAction: ModalActionTypes = {
      type: 'OPEN_MODAL_LOGIN',
    }
    expect(openModalLogin()).toEqual(expectedAction)
  });
  it('should create an action to close the login modal', () => {
    const expectedAction: ModalActionTypes = {
      type: 'CLOSE_MODAL_LOGIN',
    }
    expect(closeModalLogin()).toEqual(expectedAction)
  });
  it('should create an action to get posts', () => {
    const expectedAction: PostActionTypes = {
      type: 'GET_POSTS',
    }
    expect(getPosts()).toEqual(expectedAction)
  });
})