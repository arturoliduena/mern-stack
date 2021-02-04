import {
  FavActionTypes,
  AuthActionTypes,
  SET_FAVORITES,
  LOGOUT,
} from '../actions/actionTypes';

const initialStateFavorite: string[] = [];

function favorite(state: string[] = initialStateFavorite, action: FavActionTypes | AuthActionTypes): string[] {
  switch (action.type) {
    case SET_FAVORITES:
      return action.favorites;
    case LOGOUT:
      return []
    default:
      return state
  }
}

export default favorite;