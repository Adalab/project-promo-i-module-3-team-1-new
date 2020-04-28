import React from 'react';
import logo from '../../images/awesome_logo.svg'
import {Link} from 'react-router-dom';

class LandingPageBody extends React.Component {
    render() {
          return (
               <div id="landingPageBody" className="landingPageBody page_main">
                
                    <div className="content-container">
                      <div className="awesome-image-container">
                        <img
                          className="awesome-image"
                          src={logo}
                          alt="Awesome profile-cards"
                          title="Awesome profile-cards"
                        />
                      </div>
                      <h1 className="title">Crea tu tarjeta de visita</h1>
                      <p className="text">
                        Crea mejores contactos profesionales de forma fácil y cómoda
                      </p>
                      <div className="icon-container">
                        <div className="design-icon">
                          <i className="far fa-object-ungroup"></i>
                          <p className="icon1">Diseña</p>
                        </div>
                        <div className="fill-icon">
                          <i className="far fa-keyboard"></i>
                          <p className="icon2">Rellena</p>
                        </div>
                        <div className="share-icon">
                          <i className="fas fa-share-alt"></i>
                          <p className="icon3">Comparte</p>
                        </div>
                      </div>
                    </div>
                    <div className="button-container">
                      <Link className="ldng-btn" to="/profilepage">
                          <button type="button" className="button" title="Botón: Comenzar">
                            comenzar
                          </button>
                          </Link>
                    </div>
                  </div>
              
          );
    }
  }

export default LandingPageBody;