import { takeEvery, fork, put, call, select } from 'redux-saga/effects';
import * as actions from '../actions/post';
import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  DELETE_POST,
} from '../actions/actionTypes';
import callApi from '../../util/apiCaller';
import { getToken } from '../../util/selector';

// create a generator function
function* savePost(action: any) {
  // try to make the api call
  try {
    const token = yield select(getToken);
    // yield the api responsse into data
    const payload = yield call(callApi, 'posts', 'post', action.data, token);
    yield put(actions.setPosts(payload.posts))
  } catch (e) {
    console.error(e);
  }
}

function* watchSavePost() {
  yield takeEvery(ADD_POST, savePost);
}

function* fetchPosts() {
  try {
    const payload = yield call(callApi, 'posts');
    yield put(actions.setPosts(payload.posts))
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchPosts() {
  yield takeEvery(GET_POSTS, fetchPosts);
}

function* fetchPost(action: any) {
  try {
    const payload = yield call(callApi, `posts/${action.cuid}`);
    yield put(actions.addPost(payload.data))
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchPost() {
  yield takeEvery(GET_POST, fetchPost);
}

function* deletePost(action: any) {
  try {
    const token = yield select(getToken);
    const payload = yield call(callApi, `posts/${action.cuid}`, 'delete', action.data, token);
    yield put(actions.setPosts(payload.posts))
  } catch (e) {
    console.error(e);
  }
}

function* watchDeletePost() {
  yield takeEvery(DELETE_POST, deletePost);
}

const postSagas = [
  fork(watchSavePost),
  fork(watchFetchPost),
  fork(watchFetchPosts),
  fork(watchDeletePost),
];

export default postSagas;