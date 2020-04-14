import React from 'react';
import '../../stylesheets/Share.scss';

class Share extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="form__sections form__share">
                <div className="form__open" id="form__share--open">
                    <div className="create-card-button-container">
                            <button id="createCardButton" type="button" className="create-card-button">
                                <a href="#" arial-label="Crear tarjeta"><i className="far fa-address-card"></i>Crear tarjeta</a>
                            </button>
                    </div>
           
            
                   <div className="form-container created-container hidden">
                        <p>La tarjeta ha sido creada:</p>
                        <p className="linkResponse"></p>
                        <a href="" id="shareOnTwitter" className="share-twitter-button" target="_blank">
                            <i className="fab fa-twitter"></i> Compartir en Twitter</a>
                    </div>
                </div>
                </section>
                );
            }
}




export default Share; 