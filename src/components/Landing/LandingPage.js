import React from 'react';
import LandingPageBody from './LandingPageBody';
import AllPageFooter from './AllPageFooter';


class LandingPage extends React.Component {
    render() {
          return (
              <div id="landingPage" className="landingPage">
                  <LandingPageBody></LandingPageBody>
                  <AllPageFooter></AllPageFooter>
              </div>
          );
    }
  }


export default LandingPage;