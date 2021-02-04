import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import { getFavorites } from './store/actions/favorite';

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PostListPage} />
        <Route path="/posts/:cuid/:slug" exact component={PostDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
