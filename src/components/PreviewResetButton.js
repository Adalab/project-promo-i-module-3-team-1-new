import React from 'react';

class PreviewResetButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button class="previewResetButton" href="#">
                <i class="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;