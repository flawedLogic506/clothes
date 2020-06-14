import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignInPage from '../pages/SignInPage';

import '../styles/styles.scss'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
