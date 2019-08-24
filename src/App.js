import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInOut from './pages/authentication/signin-out.component';
import Homepage from './pages/homepage/homepage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.config';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
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
