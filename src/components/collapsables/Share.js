import React from 'react';
import '../../stylesheets/Share.scss';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCardData = this.fetchCardData.bind(this)
    }

   fetchCardData (event) {
        if(this.props.errorName === true && this.props.errorEmail === true && this.props.errorJob === true){
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
                            disabled={this.props.errorName === false || this.props.errorEmail === false || this.props.errorJob === false}>
                                <p><i className="far fa-address-card"></i>Crear tarjeta</p>
                            </button>
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



//<a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${props.cardURL}`} target="_blank" rel="noopener noreferrer" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>


//twitterLink.href = `https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20hecha%20con%20%23AwesomeProfileCards%3A%20${props.cardURL}&hashtags=Adalab%2C%20promoIdelisa`;



export default Share; 