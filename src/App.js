import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Switch>
          <Route exact path ='/' component = {Homepage}/>
          <Route path ='/shop/hats' component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
