import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';
import Avatarphoto from '../components/collapsables/Default_avatar.js'
import { fetchCardData } from '../services/Fetch.js'
import AvatarImg from '../components/collapsables/Default_avatar.js';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.validationEmail = this.validationEmail.bind(this)
    this.validationName = this.validationName.bind(this)
    this.validationJob = this.validationJob.bind(this)
    this.setURL = this.setURL.bind(this);
    this.fetchCardData = this.fetchCardData.bind(this);
    this.handleImage = this.handleImage.bind(this);

    this.state = {
      activePanel: '',
      rotatearrow: '',
      Avatarphoto: true,
      errorName: false,
      errorJob: false,
      errorEmail: false,
      isLoading: false,
      cardURL: '',
      cardSuccess: '',

      userInfo: {
        palette: '4',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: AvatarImg

      },

    }
  }


  validationEmail(valueName, valueTarget) {

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

  validationName(valueName, valueTarget) {
    if (valueName === 'name') {

      this.setState(prevState => {
        let newUserInfo = prevState.userInfo;
        return {
          userInfo: { ...newUserInfo, "name": valueTarget }
        }
      })
      if (valueTarget !== '') {
        this.setState({
          errorName: true,
        })
      } else {
        this.setState({
          errorName: false,
        })
      }

    }
  }

  validationJob(valueName, valueTarget) {
    if (valueName === 'job') {

      this.setState(prevState => {
        let newUserInfo = prevState.userInfo;
        return {
          userInfo: { ...newUserInfo, "job": valueTarget }
        }
      })
      if (valueTarget !== '') {
        this.setState({
          errorJob: true,
        })
      } else {
        this.setState({
          errorJob: false,
        })
      }

    }
  }

  handleImage(photo) {

    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          photo: photo
        }
      }
    });
  }

  handleInputValue(currentTargetName, currentTargetValue) {
    this.validationEmail(currentTargetName, currentTargetValue)
    this.validationName(currentTargetName, currentTargetValue)
    this.validationJob(currentTargetName, currentTargetValue)
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
      Avatarphoto: true,
        errorName: false,
        errorJob: false,
        errorEmail: false,
      userInfo: {
        ...this.state.userInfo,
        palette: '4',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: AvatarImg
        }
        
    })
    
  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('data'));

    if(data !== null){
        this.setState({
            userInfo: {
                "palette": data.palette !== '' ? data.palette : '4',
                "name": data.name,
                "job": data.job,
                "phone": data.phone,
                "email": data.email,
                "linkedin": data.linkedin,
                "github": data.github,
                "photo": data.photo !== '' ? data.photo : Avatarphoto,
            },
          
            Avatarphoto: data.photo === true,
            errorName: data.name !== '' ? true : false,
            errorJob: data.job !== '' ? true : false,
            errorEmail: data.errorEmail !== '' ? true : false,
            cardURL: ''
         
        })
    }
}

  componentDidUpdate(){
    localStorage.setItem('data', JSON.stringify(this.state.userInfo));

}

fetchCardData(){
  const json = JSON.parse(localStorage.getItem('data'));
  fetchCardData(json)
  .then(result => this.setURL(result))
  .catch(error => console.log(error));
  this.setState({
      isLoading: true
  })
}
setURL(result){
  if(result.success){
      this.setState({
          cardURL: result.cardURL,
          isLoading: false,
          cardSuccess: true
      })
  } else {
      this.setState({
          cardURL: 'ERROR:' + result.error,
          isLoading: false
      })
  }
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
          inputFile={this.state.userInfo.photo}
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
          inputFile={this.state.userInfo.photo}
          handleImage={this.handleImage}
          errorJob={this.state.errorJob}
          errorName={this.state.errorName}
          errorEmail={this.state.errorEmail}
          cardURL={this.state.cardURL}
          cardSuccess={this.state.cardSuccess}
          fetchCardData={this.fetchCardData}
          handleReset={this.handleReset}

        />

      </div>
    )
  }
}
export default ProfilePageBody;