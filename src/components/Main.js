import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from '../pages/Pages';


const Main = () => (
  <>
    <Switch>
      <Route path="/" component={Pages} />
    </Switch>
  </>
);

export default Main;
