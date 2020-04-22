import React from 'react';
import SocialButton from './SocialButton.js';


class PreviewSocialButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <ul id="PreviewSocialButtonList" className={`card__socialbuttons--list ${this.props.value === "1" ? "buttonStyle1" : this.props.value === "2" ? "buttonStyle2" : this.props.value === "3" ? "buttonStyle3" : "buttonStyle4"}`}>
        
        <SocialButton
          name="email address"
          destination={`mailto:${this.props.email}`}
          iconType="far fa-envelope" 
          class={(this.props.email === '' ? "newHidden" : "card__socialbuttons--box")}
       
            

        />
        <SocialButton
          name="phone number"
          destination={`tel:${this.props.phone}`}
          iconType="fas fa-mobile-alt"
          class={(this.props.phone === '' ? "newHidden" : "card__socialbuttons--box")}
        />
        <SocialButton
          name="linkedin profile"
          destination={`https://www.linkedin.com/in/${this.props.linkedinuser}`}
          iconType="fab fa-linkedin-in"
          class={(this.props.linkedin === '' ? "newHidden" : "card__socialbuttons--box")}
        />
        <SocialButton 
          name="github profile" 
          destination={`https://www.github.com/${this.props.githubuser}`} 
          iconType="fab fa-github-alt" 
          class={(this.props.github === '' ? "newHidden" : "card__socialbuttons--box")}
        />
      </ul>
    );
  }
}

PreviewSocialButtonList.defaultProps = {
  email: '',
  phone: '',
  linkedinuser: '',
  githubuser: ''
}


export default PreviewSocialButtonList;