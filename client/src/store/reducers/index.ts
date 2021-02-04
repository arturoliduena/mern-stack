import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import favorite from './favorite';
import post from './post';

const reducers = combineReducers({
  modal,
  auth,
  favorite,
  post,
})

export default reducers;