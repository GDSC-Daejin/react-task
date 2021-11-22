import React from 'react';
import { Switch, Route } from 'react-router';

const Main = () => (
  <>
    <Switch>
      <Route path={' '} component={Pages} />
    </Switch>
  </>
);

export default Main;
