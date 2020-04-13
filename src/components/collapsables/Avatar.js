import React from 'react';
import AvatarImg from './Default_avatar.js'

const fr = new FileReader();

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      img: AvatarImg
    };
  }


  handleSubmit(event) {
    event.preventDefault();
    const myFile = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }

  writeImage() {
    this.setState({
      img: fr.result
    });
    this.props.handleImage(fr.result);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form__open" id="form__fill--open">
        <label for="photo">Imagen de perfil <span>*</span></label>
       
        <div class="photo__upload">
        {/* <button class="photo__upload--btn js__photo--btn" id="submit">Añadir imagen </button> */}
        <input type="file" ref={this.fileInput} id="photo" name="photo" className="hiddenJS js__photo--file" required />
          <button class="photo__upload--btn js__photo--btn" id="submit">Añadir imagen </button>
          <img className="thumbnail js__photo--thumbnail" src={this.state.img} alt="Imagen" />

        </div>
      </form>

    );
  }
}

export default Avatar;
