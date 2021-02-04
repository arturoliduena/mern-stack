import { takeEvery, fork, put, call, select } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import {
  LOGIN,
  SIGNUP,
  ME_AUTH,
} from '../actions/actionTypes';

import callApi from '../../util/apiCaller';
import { getToken } from '../../util/selector';

function* handlerError(error: any) {
  if(error.status == 401){
    yield put(actions.setAuth({
      user: null,
      authorized: false,
      message: 'Unauthorized',
      error: error.data,
      token: null,
    }))
  }
};

function* fetchLogin(action: any) {
  try {
    const payload = yield call(callApi, 'users/login', 'post', action.user);
    yield put(actions.setAuth(payload))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchLogin() {
  yield takeEvery(LOGIN, fetchLogin);
}

function* fetchSignup(action: any) {
  try {
    const payload = yield call(callApi, 'users/signup', 'post', action.user);
    yield put(actions.setAuth(payload))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchSignup() {
  yield takeEvery(SIGNUP, fetchSignup);
}

function* fetchMeAuth() {
  try {
    const token = yield select(getToken);
    const payload = yield call(callApi, 'users/me', 'get', {}, token);
    yield put(actions.setAuth(payload))
  } catch (e) {
    yield call(handlerError, e.response);
  }
}

function* watchFetchMeAuth() {
  yield takeEvery(ME_AUTH, fetchMeAuth);
}
const characterSagas = [
  fork(watchFetchLogin),
  fork(watchFetchSignup),
  fork(watchFetchMeAuth),
];

export default characterSagas;