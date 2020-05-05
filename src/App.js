import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './global.css';

import ClientHome from './pages/ClientHome/ClientHome';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={ClientHome} />
    <Route path="/chat/client" component={Chat} />
    <Route path="/chat/seller" component={Chat} />
  </Router>
);

export default App;
