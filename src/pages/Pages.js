import React from 'react';
import { Route, Switch } from 'react-router';

const Pages = () => (
  <Switch>
    <Route path="/introduce" component={Introduce.js} />
  </Switch>
);

export default Pages;
