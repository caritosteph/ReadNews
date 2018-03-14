import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const Routes = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/categories" component={Dashboard}/>
          <Route path="/:category/posts" component={Dashboard} />
          <Route path="/posts"  component={Dashboard} />
          <Route path="/posts/:id" component={Dashboard}/>
          <Route path="/posts/:id/comments" component={Dashboard} />
          <Route path="/comments" component={Dashboard} />
          <Route path="/comments/:id" component={Dashboard} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
