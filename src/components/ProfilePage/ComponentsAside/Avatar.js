import React from 'react';

const fr = new FileReader();

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }

  writeImage() {
    this.setState({
      photo: fr.result
    });
    this.props.handleImage(fr.result);
  }

fakeClick(){
  this.fileInput.current.click()
}

render() {
  return (
    <div className="form__open" id="form__fill--open"> 
      <label htmlFor="photo">Imagen de perfil <span>*</span></label>
     
      <div className="photo__upload">
       
      <input type="file" ref={this.fileInput} id="photo" name="photo" className="newHidden js__photo--file" onChange={this.handleSubmit} required />
        <button onClick={this.fakeClick} className="photo__upload--btn js__photo--btn" id="submit">Añadir imagen </button>
        <img className="thumbnail js__photo--thumbnail" src={this.props.inputFile} alt="Imagen" /> 
      </div>
 
    </div>
  );
}
}
export default Avatar;
