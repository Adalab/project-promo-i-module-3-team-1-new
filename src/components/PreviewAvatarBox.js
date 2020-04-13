import React from 'react';

class PreviewAvatarBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    };
    render() {
    
    return (
      <div id="previewAvatarBox" className="card__avatar--box"> 
      <img className="card__avatar--box" src={this.props.inputFile} alt="Imagen"/>
      </div>
     
    );
  }
}
export default PreviewAvatarBox;
