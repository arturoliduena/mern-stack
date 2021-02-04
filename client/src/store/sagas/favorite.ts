import { takeEvery, fork, put, call, select } from 'redux-saga/effects';
import * as actions from '../actions/favorite';
import {
  GET_FAVORITES,
  ADD_FAV,
  REMOVE_FAV,
} from '../actions/actionTypes';

import callApi from '../../util/apiCaller';
import { getToken } from '../../util/selector';

function* fetchFavorites() {
  try {
    const token = yield select(getToken);
    const payload = yield call(callApi, 'favorites', 'get', {}, token);
    yield put(actions.setFavorites(payload?.favorites || []))
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchFavorites() {
  yield takeEvery(GET_FAVORITES, fetchFavorites);
}

function* fetchAddFav(action: any) {
  try {
    const token = yield select(getToken);
    const payload = yield call(callApi, `favorites/${action.cuid}`, 'post', {}, token);
    yield put(actions.setFavorites(payload?.favorites || []))
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchAddFav() {
  yield takeEvery(ADD_FAV, fetchAddFav);
}

function* fetchRemoveFav(action: any) {
  try {
    const token = yield select(getToken);
    const payload = yield call(callApi, `favorites/${action.cuid}`, 'delete', {}, token);
    yield put(actions.setFavorites(payload?.favorites || []))
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchRemoveFav() {
  yield takeEvery(REMOVE_FAV, fetchRemoveFav);
}


const favoritesSagas = [
  fork(watchFetchFavorites),
  fork(watchFetchAddFav),
  fork(watchFetchRemoveFav),
];

export default favoritesSagas;