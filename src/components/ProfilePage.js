import React from 'react';
import '../stylesheets/ProfilePage.scss';
import AllPageHeader from './AllPageHeader';
import ProfilePageBody from './ProfilePageBody';
import AllPageFooter from './AllPageFooter';


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