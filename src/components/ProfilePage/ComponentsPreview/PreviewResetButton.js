import React from 'react';

class PreviewResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.clickReset = this.clickReset.bind(this);
    }
  clickReset(event){
        event.preventDefault()
        this.props.handleReset()
    }
    render() {
        return (
            <button onClick = {this.clickReset} className="previewResetButton" href="#">
                <i className="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;