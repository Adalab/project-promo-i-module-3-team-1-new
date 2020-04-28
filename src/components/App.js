import React from 'react';
import '../stylesheets/App.scss';
import {Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage/ComponentsPreview/ProfilePage';
import LandingPage from './Landing/LandingPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
       <Switch>
        <Route exact path="/">
          <LandingPage/>
       </Route>
        <Route exact path="/profilepage">
          <ProfilePage/>
        </Route>
       </Switch>
      </div>
    );
  }
}

export default App;
