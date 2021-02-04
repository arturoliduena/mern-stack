import { IAuth, IPost } from '../../types';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTH = 'SET_AUTH';
export const SIGNUP = 'SIGNUP';
export const ME_AUTH = 'ME_AUTH';

export const OPEN_MODAL_LOGIN = 'OPEN_MODAL_LOGIN';
export const CLOSE_MODAL_LOGIN = 'CLOSE_MODAL_LOGIN';
export const OPEN_MODAL_REGISTER = 'OPEN_MODAL_REGISTER';
export const CLOSE_MODAL_REGISTER = 'CLOSE_MODAL_REGISTER';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const SET_POSTS = 'SET_POSTS';
export const DELETE_POST = 'DELETE_POST';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const GET_FAVORITES = 'GET_FAVORITES';
export const SET_FAVORITES = 'SET_FAVORITES';

interface OpenModalAction {
  type: typeof OPEN_MODAL_LOGIN | typeof OPEN_MODAL_REGISTER
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL_LOGIN | typeof CLOSE_MODAL_REGISTER
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;

interface LoginAction {
  type: typeof LOGIN
  user: {
    email: string,
    password: string,
  }
}

interface LogoutAction {
  type: typeof LOGOUT
}

interface SignupAction {
  type: typeof SIGNUP
  user: {
    email: string,
    password: string,
  }
}

interface SetAuthAction {
  type: typeof SET_AUTH
  payload: IAuth
}

interface MeAuthAction {
  type: typeof ME_AUTH
}

export type AuthActionTypes = LoginAction | LogoutAction | SignupAction | SetAuthAction | MeAuthAction;

interface GetFavoritesAction {
  type: typeof GET_FAVORITES
}

interface AddFavAction {
  type: typeof ADD_FAV
  cuid: string
}

interface RemoveFavAction {
  type: typeof REMOVE_FAV
  cuid: string
}

interface SetFavoritesActions {
  type: typeof SET_FAVORITES
  favorites: string[]
}

export type FavActionTypes = GetFavoritesAction | AddFavAction | RemoveFavAction | SetFavoritesActions;

interface AddPostAction {
  type: typeof ADD_POST
  data: FormData
}

interface GetPostAction {
  type: typeof GET_POST
  cuid: string
}

interface GetPostsAction {
  type: typeof GET_POSTS
}

interface AddPostsAction {
  type: typeof SET_POSTS
  posts: IPost[]
}

interface DeletePostAction {
  type: typeof DELETE_POST
  cuid: string
}

export type PostActionTypes =  GetPostAction | AddPostAction | GetPostsAction | AddPostsAction | DeletePostAction;
