import React from 'react';
// Import Components
import PostListItem from './PostListItem';
import { IPost } from '../../types';

interface Props {
  posts: IPost[]
}
function PostList(props: Props) {
  return (
    <div className="d-flex flex-column w-100">
      <h3 className="mt-4">Posts</h3>
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
};

export default PostList;
