import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/quiz/:name">
          <Quiz/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
