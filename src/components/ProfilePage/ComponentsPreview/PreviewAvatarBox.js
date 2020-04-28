import React from 'react';

class PreviewAvatarBox extends React.Component {
    render() {
    return (
      <div id="previewAvatarBox" className="card__avatar--box"> 
      <img className="card__avatar--box" src={this.props.inputFile} alt="Imagen"/>
      </div>
     
    );
  }
}
export default PreviewAvatarBox;
