import React from 'react';
import '../stylesheets/Footer.scss';
import logoAda from '../images/logo-adalab.png'
import logoCo from '../images/rocket.png'
class AllPageFooter extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="allPageFooter" className="allPageFooter">
                <footer className="page_footer">
                    <div className="footer-copyright">
                        <img className="logo-unicorn" src={logoCo} alt="logo-localUnicorns"/>
                        <p>reactRockets &copy; 2020</p>
                    </div>
                    <div className="footer-logo-container">
                        
                        <a href="#" alt="go to adalab" aria-label="go to adalab"/><img src={logoAda} alt="logo-adalab"/>
                    </div> 
                </footer>
            </div>
          );
    }
  }

export default AllPageFooter;