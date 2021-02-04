import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { openModalLogin, openModalRegister } from '../../store/actions/modal';
import { logout } from '../../store/actions/auth';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    group: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }),
);

function Navbar() {
  const isLogin = useSelector((state: RootState) => state.auth.authorized);
  const email = useSelector((state: RootState) => state.auth.user?.email);
  const dispatch = useDispatch();
  const classes = useStyles();
  const openLogin = () => {
    dispatch(openModalLogin())
  }

  const openRegister = () => {
    dispatch(openModalRegister())
  }

  const handleLogout = () => {
    dispatch(logout())

  }
  return (
    <AppBar position="fixed">
      <Toolbar >
        <Typography variant="h6" className={classes.title}>
          <Link href="/" className="text-white">Home</Link>
        </Typography>
        <div>
          {
            !isLogin ?
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button variant="contained" color="default" onClick={openLogin} >Login</Button>
                <Button variant="contained" color="default" onClick={openRegister} >Singup</Button>
              </ButtonGroup> :
              <div className={classes.group}>
                <Typography variant="h6" className={classes.title}>Hi {email}</Typography>
                <Button variant="contained" color="default" onClick={handleLogout} >Logout</Button>
              </div>
          }
        </div>
      </Toolbar>
    </AppBar>
  );

};

export default Navbar;
