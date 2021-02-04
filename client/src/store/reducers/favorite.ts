import {
  FavActionTypes,
  SET_FAVORITES,
} from '../actions/actionTypes';

const initialStateFavorite: string[] = [];

function favorite(state: string[] = initialStateFavorite, action: FavActionTypes): string[] {
  switch (action.type) {
    case SET_FAVORITES:
      return action.favorites;
    default:
      return state
  }
}

export default favorite;