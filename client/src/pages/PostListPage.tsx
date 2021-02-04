import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
// Import Components
import PostList from '../components/Post/PostList';
import PostCreateWidget from '../components/Post/PostCreateWidget';
// Import Actions
import { addPost, getPosts } from '../store/actions/post';
import Logo from '../logo.svg';

interface Props {
	showAddPost: boolean
}

const PostListPage = ({ showAddPost }: Props ) => {

  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.data);

  useEffect(() => {
    dispatch(getPosts());
  },[]);

  const handleAddPost = (data: FormData) => {
    dispatch(addPost(data));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <img className="mx-3" src={Logo} alt="Logo" style={{ height: '72px'}}/>
          <h1 className="mt-4">
             Alaya Blog
          </h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <PostCreateWidget addPost={handleAddPost} showAddPost={showAddPost} />
        </div>
        <div className="col-6">
          <PostList 
            posts={posts} 
          />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
