import React from 'react';
import AllPageHeader from '../../Landing/AllPageHeader';
import ProfilePageBody from './ProfilePageBody';
import AllPageFooter from '../../Landing/AllPageFooter';


class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.handleSwitchMode = this.handleSwitchMode.bind(this);
      this.state = {
        mode: false,
      }
    }
    handleSwitchMode() {
      this.setState(prevState => {
        return {
          mode: !prevState.mode
        }
      })
    }
    render() {
          return (
              <div id="profilePage" 
              className={`${this.state.mode === true ? 'darkProfilePage' : 'profilePage'}`}>
                  <AllPageHeader
                  handleSwitchMode= {this.handleSwitchMode}
                  mode ={this.state.mode}
                  />
                  
                  <ProfilePageBody
                  handleSwitchMode= {this.handleSwitchMode}
                  mode ={this.state.mode}
                  />
                  <AllPageFooter
                  handleSwitchMode= {this.handleSwitchMode}
                  mode ={this.state.mode}
                  />
              </div>
          );
    }
  }

export default ProfilePage;