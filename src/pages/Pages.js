import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Introduce from './Introduce';

const Pages = () => (
  <Switch>
    <Route path="/introduce" component={Introduce} />
  </Switch>
);

export default Pages;
