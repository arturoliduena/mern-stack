import {
  FavActionTypes,
  GET_FAVORITES,
  ADD_FAV,
  REMOVE_FAV,
  SET_FAVORITES
} from './actionTypes';

export const getFavorites = (): FavActionTypes => ({
  type: GET_FAVORITES,
});

export const addFav = (cuid: string): FavActionTypes => ({
  type: ADD_FAV,
  cuid
});

export const removeFav = (cuid: string): FavActionTypes => ({
  type: REMOVE_FAV,
  cuid
});

export const setFavorites = (favorites: string[]): FavActionTypes => ({
  type: SET_FAVORITES,
  favorites
});