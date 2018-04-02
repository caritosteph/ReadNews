import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/:category" component={Dashboard} />
          <Route path="/posts/:id/comments" component={Dashboard} />
          <Route path="/comments/:id" component={Dashboard} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
