import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home/Home'

export const App = () => {
  return (
    <>
      <Router>
      <Switch>
        <Route exact component={Home} />
      </Switch>
      </Router>
    </>
  )
}
