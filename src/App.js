import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ClientHome from './pages/ClientHome/ClientHome';
import SellerHome from './pages/SellerHome/SellerHome';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={ClientHome} />
    <Route path="/seller" exact component={SellerHome} />
    <Route path="/join" component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
