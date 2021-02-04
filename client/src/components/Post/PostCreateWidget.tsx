import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { openModalLogin, openModalRegister } from '../../store/actions/modal';
// Import Style

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

interface Props {
  addPost: (data: FormData) => void
  showAddPost: boolean
}

const PostCreateWidget = ({ addPost }: Props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', title: '', content: '' });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const isLogin = useSelector((state: RootState) => state.auth.authorized);
  const classes = useStyles();

  const openLogin = () => {
    dispatch(openModalLogin())
  };

  const openRegister = () => {
    dispatch(openModalRegister())
  }

  const submit = () => {
    if (state.name && state.title && state.content && selectedFile) {
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("title", state.title);
      formData.append("content", state.content);
      formData.append("file", selectedFile);
      setState({ name: '', title: '', content: '' })
      addPost(formData);
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div className={`${classes.root} d-flex flex-column my-4 w-100`}>
      <h3>Create new post</h3>
      {
        isLogin ?
          <>
            <TextField variant="filled" value={state.name} label="Author name" name="name" onChange={handleChange} />
            <TextField variant="filled" value={state.title} label="Post title" name="title" onChange={handleChange} />
            <TextField variant="filled" value={state.content} multiline rows="4" label="Post content" name="content" onChange={handleChange} />
            <input
              type="file"
              onChange={handleImageChange}
            />
            <Button className="mt-4" variant="contained" color="primary" onClick={submit} disabled={!state.name || !state.title || !state.content || !selectedFile}>
              Submit
            </Button>
          </> :
          <>
            <Button className="mt-4" variant="contained" color="primary" onClick={openLogin} >
              Login
            </Button>
            <Button className="mt-4" variant="contained" color="primary" onClick={openRegister} >
              SingUp
            </Button>
          </>
      }
    </div>
  );
};

export default PostCreateWidget;
