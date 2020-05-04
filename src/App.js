import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={Dashboard} />
    <Route path="/join" component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
