import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
// Import Actions
import { getPost } from '../store/actions/post';
// Import Selectors
import { useParams } from 'react-router-dom';

export function PostDetailPage() {

  const { cuid }: { cuid: string } = useParams();
  const post = useSelector((state: RootState) => state.post.data.find(currentPost => (currentPost.cuid === cuid)));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!post) dispatch(getPost(cuid));
  }, []);

  return (post
    ?
      (<div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{post.title}</h1>
            <p>By {post.name}</p>
            <p>{post.content}</p>
          </div>
        </div>
      </div>)
    : (<div>Loading</div>)
  );
}
export default PostDetailPage;
