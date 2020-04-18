import React from 'react';

class FillInput extends React.Component{
    constructor(props){
    super(props)
    this.changeInputValue= this.changeInputValue.bind(this)
    }
    changeInputValue(event){
        console.log('FillInput', event)
        this.props.handleInputValue(event.currentTarget.name, event.currentTarget.value)            
    }
    render(){
        
        return(
            <div className="form__flex">
                <label htmlFor={this.props.htmlFor}>{this.props.labelName}</label>
                <input  type={this.props.inputType}
                        id={this.props.inputId} 
                        name={this.props.inputName}
                        placeholder={this.props.placeHolder}
                        maxLength={this.props.maxLength}
                        className={this.props.inputClassName}
                        value={this.props.value}
                        onChange={this.changeInputValue}
                        required={this.props.required}
                        
                />
                
            </div>

        );
    }
}

export default FillInput;