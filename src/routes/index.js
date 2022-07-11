import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from '../styles/global.js';
import { BrowserRouter } from 'react-router-dom';

import Clock from '../pages/Clock';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/' component={Clock} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App;