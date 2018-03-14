import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router';
import Dashboard from '../components/Dashboard';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/categories" component={Dashboard}/>
        <Route path="/:category/posts" component={Dashboard} />
        <Route path="/posts"  component={Dashboard} />
        <Route path="/posts/:id" component={Dashboard}/>
        <Route path="/posts/:id/comments" component={Dashboard} />
        <Route path="/comments" component={Dashboard} />
    </Switch>
);

export default Routes;
