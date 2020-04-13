import React from 'react';
import PreviewResetButton from './PreviewResetButton.js';
import PreviewProfileInfo from './PreviewProfileInfo.js';
import PreviewAvatarBox from './PreviewAvatarBox.js';
import PreviewSocialButtonList from './PreviewSocialButtonList.js';

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div id="cardPreview" className="cardPreview grid-2">
        <div id="cardPreview__centeredBox" className="cardPreview__centeredBox" >
          <PreviewResetButton handleReset={this.props.handleReset}
           />
          <div id="card" className="card" >

            <PreviewProfileInfo
              value={this.props.checked}
              name={this.props.valueName}
              job={this.props.valueJob}
            />
            <PreviewAvatarBox
            handleImage = {this.props.handleImage}
            inputFile={this.props.inputFile}
            
            />
           
            <PreviewSocialButtonList  value={this.props.checked}
                                       email={this.props.valueEmail}
                                       phone={this.props.valuePhone}
                                       linkedin={this.props.valueLinkedin}
                                       github={this.props.valueGithub}
                                       />
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;