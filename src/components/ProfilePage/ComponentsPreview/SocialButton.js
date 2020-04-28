import React from 'react';

class SocialButton extends React.Component {
    render() {
        return (
            <li id="socialButtonBox" className={this.props.class}>
                <a 
                    id="emailButtonLink"
                    className="preview__socialButton preview__socialButton--email buttonStyle1" 
                    href={this.props.destination} 
                    target="_blank"
                    rel="noopener noreferrer"
                    title={this.props.name}
                >
                    <i className={`icon ${this.props.iconType}`}></i>
                </a>
            </li>
        );
    }
}


export default SocialButton;

