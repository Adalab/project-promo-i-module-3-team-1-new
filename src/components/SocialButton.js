import React from 'react';

class SocialButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li id="socialButtonBox" className={this.props.class}>
                <a 
                    id="emailButtonLink"
                    class="preview__socialButton preview__socialButton--email buttonStyle1" 
                    href={this.props.destination} 
                    target="_blank" 
                    title={this.props.name}
                >
                    <i className={`icon ${this.props.iconType}`}></i>
                </a>
            </li>
        );
    }
}


export default SocialButton;



//className="card__socialbuttons--box"