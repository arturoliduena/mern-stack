import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deletePost } from '../../store/actions/post';
import { addFav, removeFav } from '../../store/actions/favorite';
import { IPost } from '../../types';

interface Props {
  post: IPost,
}


function PostListItem({ post }: Props) {
  const dispatch = useDispatch();
  const user_id = useSelector((state: RootState) => state.auth.user?.id);

  const onDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      dispatch(deletePost(post.cuid));
    }
  };
  
  const handleFavavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(addFav(post.cuid));
  };

  const handleFavavoriteR = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(removeFav(post.cuid));
  };

  return (
    <Card className="w-100 my-4">
      <CardContent>
        <img src={post.image_url} alt=""/>
        <Typography gutterBottom variant="h5" component="h2">
          <Link to={`/posts/${post.cuid}/${post.slug}`} >
            {post.title}
          </Link>
        </Typography>
        <Typography component="p" className="mt-3">
          {post.content}
        </Typography>
        <Typography color="textSecondary" component="p" className="mt-3 font-italic">
          From {post.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={onDelete} disabled={user_id !== post.user_id}>
          Delete post
        </Button>
        <Button size="small" color="secondary" onClick={handleFavavorite} disabled={false}>
          Favorite
        </Button>
        <Button size="small" color="secondary" onClick={handleFavavoriteR} disabled={false}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostListItem;
