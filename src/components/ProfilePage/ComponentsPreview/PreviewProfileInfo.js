import React from 'react';


class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (
      
      <div id="PreviewProfileInfo" className={`card__profileInfo--box ${this.props.value === "1" ? "infoStyle1" : this.props.value === "2" ? "infoStyle2" : this.props.value === "3" ? "infoStyle3" : "infoStyle4"}`}>
          <p id="PreviewProfileInfoName" className="card__profileInfo--name" >
          {(this.props.name === '' ? 'Nombre Apellido' : this.props.name)}
          </p>
          <p id="PreviewProfileInfoJob" className="card__profileInfo--job">{(this.props.job === '' ? 'Front-End Developer' : this.props.job)}
          </p>
      </div>
    );
  }
}

export default PreviewProfileInfo;