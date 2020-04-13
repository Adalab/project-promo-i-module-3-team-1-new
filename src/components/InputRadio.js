import React from 'react';


class InputRadio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="paletteChoices">
                <input type={this.props.type} id={this.props.id} className="radio_button rb_one" name={this.props.name} value={this.props.value} checked={this.props.checked}>
                </input>
                <label htmlfor="paletteOne" className={this.props.nameGrid1}>
                    <div className={this.props.labelName1}></div>
                    <div className={this.props.labelName2}></div>
                    <div className={this.props.labelName3}></div>
                </label>   
            </div>
        );
    }
}














export default InputRadio;