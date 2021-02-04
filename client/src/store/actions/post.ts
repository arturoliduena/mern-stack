import {
  PostActionTypes,
  GET_POST,
  ADD_POST,
  GET_POSTS,
  SET_POSTS,
  DELETE_POST,
} from './actionTypes';
import { IPost } from '../../types';

export const addPost = (data: FormData): PostActionTypes => ({
  type: ADD_POST,
  data
});

export const getPost = (cuid: string): PostActionTypes => ({
  type: GET_POST,
  cuid
});

export const getPosts = (): PostActionTypes => ({
  type: GET_POSTS,
});

export const setPosts = (posts: IPost[]): PostActionTypes => ({
  type: SET_POSTS,
  posts
});

export const deletePost = (cuid: string): PostActionTypes => ({
  type: DELETE_POST,
  cuid
});