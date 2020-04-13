import React from 'react';
import '../stylesheets/App.scss';
import ProfilePage from './ProfilePage';
import LandingPage from './LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <LandingPage></LandingPage>
        <ProfilePage></ProfilePage>
      </div>
    );
  }
}

export default App;
