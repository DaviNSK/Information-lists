import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact to="/home" from="/" />

      <Route path="/home" exact component={Home} />
    </Switch>
  );
}
