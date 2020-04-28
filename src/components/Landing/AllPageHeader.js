import React from 'react';
import logo from '../../images/awesome_logo.svg'
import logo2 from '../../images/logo2.png'
import { Link } from 'react-router-dom';

class AllPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.UpdateMode = this.UpdateMode.bind(this)
  }

  UpdateMode(evt){
    this.props.handleSwitchMode(evt.currentTarget.value)
  }
  render() {
    return (
      <div id="allPageHeader" className="allPageHeader">
        <header className="page_header">
          <Link to="/">
            <div className="header-image-container">
              <img className="header-awesome-image" src={this.props.mode === true ? logo2 : logo} alt="Awesome profile-cards"
                title="Awesome profile-cards" />

            </div>
          </Link>
          <div className="button-container">
            <label className="switch">
              <input type="checkbox" onClick={this.UpdateMode} value={this.props.mode}/>
              <span className="slider round"></span>
            </label>
          </div>
        </header>
      </div>
    );
  }
}

export default AllPageHeader;