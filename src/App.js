import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInOut from './pages/authentication/signin-out.component';
import Homepage from './pages/homepage/homepage.component';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path ='/' component = {Homepage}/>
          <Route path ='/shop/' component={ShopPage}/>
          <Route path = '/signin' component = {SignInOut}/>
        </Switch>
      </div>
    );
  }
}

export default App;
