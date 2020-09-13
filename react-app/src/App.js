import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

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
        <Route path="/result/:resultID/:name">
          <Result/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
