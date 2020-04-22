import React from 'react';
import Loader from './Loader';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCardData = this.fetchCardData.bind(this)
    }

    fetchCardData(event) {
        if (this.props.errorName === true && this.props.errorEmail === true && this.props.errorJob === true && this.props.errorLinkedin && this.props.errorGithub) {
            this.props.fetchCardData()
        } else {
            event.preventDefault();
        };
    };

    render() {
        return (
            <section className="form__sections form__share">
                <div className="form__open" id="form__share--open">
                    <div className="create-card-button-container">
                        <button id="createCardButton" type="button" className="create-card-button" onClick={this.fetchCardData}
                            disabled={this.props.errorName === false || this.props.errorEmail === false || this.props.errorJob === false || this.props.errorLinkedin === false || this.props.errorGithub === false }>
                            <p><i className="far fa-address-card"></i>Crear tarjeta</p>
                        </button>
                        <div className="loader">{this.props.isLoading === true ? <Loader/> : ''} </div>
                    </div>
                   

                    <div className={`form-container created-container ${this.props.cardSuccess === true ? '' : ' newHidden'}`}>
                    
                        <p>La tarjeta ha sido creada:</p>
                        <p className="linkResponse">
                            <a href={this.props.cardURL} target="_blank">{this.props.cardURL}</a>
                        </p>
                        <a href={`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20hecha%20con%20%23AwesomeProfileCards%3A%20${this.props.cardURL}&hashtags=Adalab%2C%20promoIdelisa`} id="shareOnTwitter" className="share-twitter-button" target="_blank">
                            <i className="fab fa-twitter"></i> Compartir en Twitter</a>
                    </div>
                </div>
            </section>
        );
    }
}





export default Share; 