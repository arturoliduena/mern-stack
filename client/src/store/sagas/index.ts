import { all } from 'redux-saga/effects';
import auth from './auth';
import favorite from './favorite';
import post from './post';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...favorite,
    ...post,
  ]);
}