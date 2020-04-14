import React from 'react';
import CollapsableItem from './collapsables/CollapsableItem';
import Design from './collapsables/Design';
import Share from './collapsables/Share.js';
import Fill from './collapsables/Fill';
import PropTypes from 'prop-types';

import '../stylesheets/ProfilePage.scss';


class FormList extends React.Component {

constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    return (
      <div className="grid-1">
        <ul id="formList" className="formList">
          <CollapsableItem collapsableTitle='Diseña'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-1'
                            activePanel = {this.props.activePanel}
                            icon = 'form__icon far fa-object-ungroup'
                            rotatearrow = {this.props.rotatearrow}

          >
        
            <Design 
                  checked = {this.props.valuepalette}
                  handleInputValue={this.props.handleInputValue}
                  
                  
            />
          </CollapsableItem>
        
          <CollapsableItem collapsableTitle='Rellena'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-2'
                            activePanel = {this.props.activePanel}
                            icon = 'form__icon far fa-keyboard'
                            rotatearrow = {this.props.rotatearrow}

          >
          
            <Fill     valueName={this.props.valueName}
                      valueJob={this.props.valueJob}
                      valueEmail={this.props.valueEmail}
                      valuePhone={this.props.valuePhone}
                      valueLinkedin={this.props.valueLinkedin}
                      valueGithub={this.props.valueGithub}
                      handleInputValue={this.props.handleInputValue}
                      inputFile={this.props.inputFile}
                      handleImage={this.props.handleImage}
                      validationEmail={this.validationEmail}
            />
          </CollapsableItem>

        <CollapsableItem collapsableTitle='Comparte'
                          handleCollapse={this.props.handleCollapse}
                          id = 'collapse-3'
                          activePanel = {this.props.activePanel}
                          icon = 'form__icon fas fa-share-alt'
                          rotatearrow = {this.props.rotatearrow}

        >
        
            <Share/> 
        </CollapsableItem>

        </ul>
      </div>
    );
  }
}
FormList.propTypes = {
  valueName:PropTypes.string.isRequired,
  valueJob:PropTypes.string.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valuePhone: PropTypes.number,
  valueLinkedin:PropTypes.string.isRequired,
  valueGithub:PropTypes.string.isRequired,
}
export default FormList;