import React from 'react';
import FillInput from './FillInput';
import '../../stylesheets/Collapsables.scss';
import '../../stylesheets/Fill.scss'
import Avatar from './Avatar';


class Fill extends React.Component{
    constructor(props){
        super(props);
        // this.validationEmail= this.validationEmail.bind(this)
        this.validationPhone= this.validationPhone.bind(this)
        
    };
   

     validationEmail(event) {
         let inputEmail = event.currentTarget
         console.log('Fill', inputEmail)
         this.props.validationEmail(inputEmail)
     }
    validationPhone() {
        this.props.validationPhone()
    }



    render(){
        // console.log('fill', this.props)
        return(
            <section  className="form__sections form__fill">
                <div className="form__open" id="form__fill--open">
                

                <FillInput  htmlFor="name"
                            labelName="Nombre completo *"
                            inputType="text"
                            inputId="name"
                            inputName="name"
                            placeHolder="Ej. Sally Jill" 
                            maxLength={20}
                            value={this.props.valueName}
                            handleInputValue={this.props.handleInputValue}
                            required
                            />
                <p className={`text-error ${this.props.errorName} === true ? '' : ' newHidden'`}> *Dinos tu nombre por favor
                </p>
                <FillInput
                            htmlFor="job"
                            labelName="Profesión *"
                            inputType="text"
                            inputId="job"
                            inputName="job"
                            placeHolder="Ej: Front-end unicorn" 
                            maxLength={25}
                            value={this.props.valueJob}
                            handleInputValue={this.props.handleInputValue}
                            required
                            // errorInput={errorJob === true ? '' : ' hidden'}
                            textError ="*Tu trabajo también, gracias"
                />
                <Avatar  inputFile={this.props.inputFile}
                         handleImage={this.props.handleImage}
                         />
                 <FillInput
                            htmlFor="email"
                            labelName="Email *"
                            inputType="email"
                            inputId="email"
                            inputName="email"
                            placeHolder= "Ej: sally-hill@gmail.com" 
                            value={this.props.valueEmail}
                            handleInputValue={this.props.handleInputValue}
                            required
                            onChange={this.validationEmail}
                />
                               
                <p className={`text-error ${this.props.errorEmail === false ? '' : 'newHidden'}`}> *Dinos tu email por favor
                </p>
                 <FillInput
                            htmlFor="phone"
                            labelName="Teléfono"
                            inputType="tel"
                            inputId="phone"
                            inputName="phone"
                            placeHolder= "Ej: 555-55-55-55"
                            value={this.props.valuePhone}
                            handleInputValue={this.props.handleInputValue}
                            
                            
                />
                <FillInput
                            htmlFor="linkedin"
                            labelName="LinkedIn *"
                            inputType="text"
                            inputId="linkedin"
                            inputName="linkedin"
                            placeHolder= "Ej: linkedin.com/in/sally.hill" 
                            value={this.props.valueLinkedin}
                            handleInputValue={this.props.handleInputValue}
                            required
                            // errorInput={errorLinkedin === true ? '' : ' hidden'}
                            textError ="*Déjanos tu LinkedIn"
                />
                 <FillInput
                            htmlFor="github"
                            labelName="Github *"
                            inputType="text"
                            inputId="github"
                            inputName="github"
                            placeHolder= "Ej: @sally-hill" 
                            value={this.props.valueGithub}
                            handleInputValue={this.props.handleInputValue}
                            required
                            // errorInput={errorGitHub === true ? '' : ' hidden'}
                            textError ="*Dinos tu GitHub, por favor"
                />
               
                </div>
            </section>
        );
    }
}

export default Fill;
