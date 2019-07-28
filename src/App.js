import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInUp from './pages/sing-in-up/sign-in-up.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
      
    </div>
  );
}

export default App;
