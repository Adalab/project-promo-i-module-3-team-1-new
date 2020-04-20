import React from 'react';
import logo from '../images/awesome_logo.svg'
import '../stylesheets/Header.scss';

class AllPageHeader extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="allPageHeader" className="allPageHeader">
                <header class="page_header">
                  <div className="header-image-container">
                      <a href="./index.html" className="link-logo" title="Awesome profile-cards"/>
                      <img className="header-awesome-image" src={logo} alt="Awesome profile-cards"
                          title="Awesome profile-cards"/>
                  </div>
                </header>
              </div>
          );
    }
  }

export default AllPageHeader;