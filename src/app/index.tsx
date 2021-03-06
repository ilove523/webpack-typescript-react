import React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from '@app/containers/App';
import { hot } from 'react-hot-loader';

const App = hot(module)(() => (
  <Switch>
    <Route path='/' component={TodoApp} />
  </Switch>
));

export default App;
