import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../components/App/App';

const routes = () => (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/categories" />
    <Route path="/:category/posts" />
    <Route path="/posts" />
    <Route path="/posts/:id" />
    <Route path="/posts/:id/comments" />
    <Route path="/comments" />
    <Route path="/comments/:id" />
  </Switch>
);

export default routes;
