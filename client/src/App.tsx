import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import './App.css';
import Login from './components/Modal/Login';
import Signup from './components/Modal/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import Navbar from './components/Nav';
import { meAuth } from './store/actions/auth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ecde2',
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const isOpenLogin = useSelector((state: RootState) => state.modal.isOpenLogin);
  const isOpenRegister = useSelector((state: RootState) => state.modal.isOpenRegister);
  const isLoading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    dispatch(meAuth());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="w-100">
        <Navbar />
        <div className="w-100 pt-5 mt-5">
          {
            isLoading ? <div> loading... </div> : <Router />
          }
        </div>
        {
          isOpenLogin ? <Login /> : null
        }
        {
          isOpenRegister ? <Signup /> : null
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
