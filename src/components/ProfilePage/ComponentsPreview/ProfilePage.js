import React from 'react';
import AllPageHeader from '../../Landing/AllPageHeader';
import ProfilePageBody from './ProfilePageBody';
import AllPageFooter from '../../Landing/AllPageFooter';


class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="profilePage" className="profilePage">
                  <AllPageHeader></AllPageHeader>
                  <ProfilePageBody></ProfilePageBody>
                  <AllPageFooter></AllPageFooter>
              </div>
          );
    }
  }

export default ProfilePage;