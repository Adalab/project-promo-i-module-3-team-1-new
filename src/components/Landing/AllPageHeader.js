import React from 'react';
import logo from '../../images/awesome_logo.svg'
import { Link } from 'react-router-dom';

class AllPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.UpdateMode = this.UpdateMode.bind(this)
  }

  UpdateMode(evt){
    console.log(evt)
    this.props.handleSwitchMode(evt.currentTarget.value)
  }
  render() {
    return (
      <div id="allPageHeader" className="allPageHeader">
        <header class="page_header">
          <Link to="/">
            <div className="header-image-container">
              <a href="./index.html" className="link-logo" title="Awesome profile-cards" />
              <img className="header-awesome-image" src={logo} alt="Awesome profile-cards"
                title="Awesome profile-cards" />

            </div>
          </Link>
          <div className="button-container">
            <label class="switch">
              <input type="checkbox" onClick={this.UpdateMode} value={this.props.mode}/>
              <span class="slider round"></span>
            </label>
          </div>


        </header>
      </div>
    );
  }
}

export default AllPageHeader;