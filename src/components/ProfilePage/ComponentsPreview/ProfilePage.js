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
      console.log(this.state.mode)
          return (
              <div id="profilePage" className="profilePage">
                  <AllPageHeader
                  handleSwitchMode= {this.handleSwitchMode}
                  mode ={this.state.mode}
                  />
                  
                  <ProfilePageBody></ProfilePageBody>
                  <AllPageFooter></AllPageFooter>
              </div>
          );
    }
  }

export default ProfilePage;