import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInOut from './pages/authentication/signin-out.component';
import Homepage from './pages/homepage/homepage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.config';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          setCurrentUser(userAuth);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);