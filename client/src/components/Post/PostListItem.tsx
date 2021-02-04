import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deletePost } from '../../store/actions/post';
import { addFav, removeFav } from '../../store/actions/favorite';
import { IPost } from '../../types';

interface Props {
  post: IPost,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'primary',
    },
  }),
);

function PostListItem({ post }: Props) {
  const dispatch = useDispatch();
  const [ isFavorite, setIsFavorite ] = useState(false)
  const user_id = useSelector((state: RootState) => state.auth.user?.id);
  const favorites = useSelector((state: RootState) => state.favorite)
  const classes = useStyles();

  useEffect(() => {
    setIsFavorite(favorites.includes(post.cuid))
  }, [favorites]);

  const onDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      dispatch(deletePost(post.cuid));
    }
  };
  
  const handleFavavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(!isFavorite ? addFav(post.cuid) : removeFav(post.cuid));
  };

  const toDateString = (value: string) => {
    let date = new Date(value);
    return date.toDateString()
  }

  return (
    <Card className="w-100 my-4">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
        }
        title={post.name}
        subheader={toDateString(post.dateAdded)}
      />
      <CardMedia
        className={classes.media}
        image={post.image_url}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          <Link to={`/posts/${post.cuid}/${post.slug}`} >
            {post.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
        <Typography color="textSecondary" component="p" className="mt-3 font-italic">
          From user: {post.user_id}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavavorite}>
          { isFavorite ? <FavoriteIcon color='error' /> : <FavoriteBorderIcon /> }
        </IconButton>
        {
          user_id == post.user_id ? 
          <IconButton aria-label="Delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton> : null
        }
      </CardActions>
    </Card>
  );
}

export default PostListItem;
