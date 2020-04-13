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
            <button onClick = {this.clickReset} class="previewResetButton" href="#">
                <i class="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;