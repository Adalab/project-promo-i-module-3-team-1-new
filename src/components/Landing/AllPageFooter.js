import React from 'react';
import logoAda from '../../images/logo-adalab.png'
import logoCo from '../../images/rocket.png'
class AllPageFooter extends React.Component {
    render() {
          return (
              <div id="allPageFooter" className={`${this.props.mode === true ? 'darkAllPageFooter' : 'allPageFooter'}`}>
                <footer className="page_footer">
                    <div className="footer-copyright">
                        <img className="logo-unicorn" src={logoCo} alt="logo-localUnicorns"/>
                        <p>reactRockets &copy; 2020</p>
                    </div>
                    <div className="footer-logo-container">
                        <img src={logoAda} alt="logo-adalab"/>
                    </div> 
                </footer>
            </div>
          );
    }
  }

export default AllPageFooter;