import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';
import AvatarImg from '../components/collapsables/Default_avatar.js'

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROFILE', this.props)



    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // this.validationHandler = this.validationHandler.bind(this)
    this.validationEmail = this.validationEmail.bind(this)
    this.validationPhone = this.validationPhone.bind(this)
    this.state = {
      activePanel: '',
      rotatearrow: '',
      AvatarImg: true,
      errorName: false,
      errorJob: false,
      errorEmail: false,
      errorLinkedin: false,
      isLoading: false,


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

    }

    this.handleImage = this.handleImage.bind(this);
  }


  validationEmail(valueName,valueTarget) {
    // debugger;
    if (valueName === 'email') {

      this.setState(prevState => {
        let newUserInfo = prevState.userInfo;
        return {
          userInfo: { ...newUserInfo, "email": valueTarget }
      }
      })

      if (valueTarget.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {

        this.setState({
          errorEmail: true,
        })
      } else {
        this.setState({
          errorEmail: false,
        })
      }

    }
  }

  validationPhone() {
    if (!this.state.userInfo.phone.match(/^[0-9]{9}/)) {
      this.setState({ errorPhone: true })
    } else {
      this.setState({ errorPhone: false })

    }
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
    this.validationEmail(currentTargetName, currentTargetValue)
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
  handleReset() {
    this.setState({ activePanel: '' })
    this.setState({ rotatearrow: '' })
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        palette: '4',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        img: AvatarImg
      }
    })
  }

  render() {

    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview valueName={this.state.userInfo.name}
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
          errorEmail={this.state.errorEmail}
         
        />

      </div>
    )
  }
}
export default ProfilePageBody;