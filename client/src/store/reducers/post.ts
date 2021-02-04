import {
  PostActionTypes,
  SET_POSTS,
} from '../actions/actionTypes';
import { IPost } from '../../types';

interface PostState {
  data: IPost[],
}

const initialStateCharacter: PostState = {
  data: []
};

function PostReducer(state: PostState = initialStateCharacter, action: PostActionTypes): PostState {
  switch (action.type) {
    case SET_POSTS:
      return {
        data: action.posts,
      }
    default:
      return state
  }
}

// Export Reducer
export default PostReducer;