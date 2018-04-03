import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PostDetail from '../components/Dashboard/PostDetail';

const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:category" component={Dashboard} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/comments/:id" component={Dashboard} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
