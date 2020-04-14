import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';
import AvatarImg from '../components/collapsables/Default_avatar.js'

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      activePanel: '',
      rotatearrow: '',

      userInfo: {
        palette: '4',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        img: AvatarImg

      },
      isPhotoDefault: true,
      errorName: false,
      errorJob: false,
      errorEmail: false,
      errorLinkedin: false,
      isFormValid: false,
      isLoading: false,
      isError: true
    }

    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(img) {
    
      this.setState(prevState => {
        return {
          userInfo: {
          ...prevState.userInfo,
            img: img
      }
    }
  });
}


  handleInputValue(currentTargetName, currentTargetValue) {
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [currentTargetName]: currentTargetValue
        }
      }
    })
  }

  handleCollapse(targetId) {
    if (targetId !== this.state.activePanel) {
      this.setState({ activePanel: targetId })
      this.setState({ rotatearrow: targetId })
    } else {
      this.setState({ activePanel: '' })
      this.setState({ rotatearrow: '' })
    }
  }
  handleReset(){
    this.setState({activePanel:''})
    this.setState({rotatearrow:''})
    this.setState({
      userInfo:{
        ...this.state.userInfo,
        palette:'4',
        name:'',
        job:'',
        email:'',
        phone:'',
        linkedin:'',
        github:'',
        img: AvatarImg
      }
    })
  }

  render() {
    
    return (
        <div id="profilePageBody" className="profilePageBody">
            <CardPreview  valueName={this.state.userInfo.name}
                          valueJob={this.state.userInfo.job}
                          valueEmail={this.state.userInfo.email}
                          valuePhone={this.state.userInfo.phone}
                          valueLinkedin={this.state.userInfo.linkedin}
                          valueGithub={this.state.userInfo.github}                  
                          checked={this.state.userInfo.palette}
                          inputFile={this.state.userInfo.img}
                          handleImage={this.handleImage}
                          handleReset={this.handleReset}
                          
                       />
          
        <FormList handleCollapse={this.handleCollapse}
          rotatearrow={this.state.rotatearrow}
          activePanel={this.state.activePanel}
          valuepalette={this.state.userInfo.palette}
          valueName={this.state.userInfo.name}
          valueJob={this.state.userInfo.job}
          valueEmail={this.state.userInfo.email}
          valuePhone={this.state.userInfo.phone}
          valueLinkedin={this.state.userInfo.linkedin}
          valueGithub={this.state.userInfo.github}
          handleInputValue={this.handleInputValue}
          inputFile={this.state.userInfo.img}
          handleImage={this.handleImage}
        />

      </div>
    )
}
}
export default ProfilePageBody;