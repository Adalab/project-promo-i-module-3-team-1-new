import React from 'react';
import '../../stylesheets/Design.scss';
import InputRadio from '../InputRadio';

class Design extends React.Component {
    constructor(props) {
        super(props);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
    }

    handlePaletteChange(event) {
        this.props.handleInputValue(event.currentTarget.name, event.currentTarget.value)
    }
    render() {
       
        return (
            <div className="form__open" id="form__design--open">
                <div className="palettesContainer">
                    <h3>colores</h3>
                    <div className="paletteChoices">

                        <input type="radio" id="paletteOne" handleInputValue={this.props.handleInputValue} className="radio_button rb_one" name="palette" value="1" onChange={this.handlePaletteChange} checked={this.props.checked === "1" ? true : false}>
                        </input>
                        <label htmlFor="paletteOne" className="palette-grid grid-one">
                            <div className="palOne_colOne"></div>
                            <div className="palOne_colTwo"></div>
                            <div className="palOne_colThree"></div>
                        </label>

                        <input type="radio" id="paletteTwo" handleInputValue={this.props.handleInputValue} className="radio_button rb_two" name="palette" value="2" onChange={this.handlePaletteChange} checked={this.props.checked === "2" ? true : false}></input>
                        <label htmlFor="paletteTwo" className="palette-grid grid-two">
                            <div className="palTwo_colOne"></div>
                            <div className="palTwo_colTwo"></div>
                            <div className="palTwo_colThree"></div>
                        </label>

                        <input type="radio" id="paletteThree" handleInputValue={this.props.handleInputValue}
                            className="radio_button rb_three" name="palette" value="3" onChange={this.handlePaletteChange} checked={this.props.checked === "3" ? true : false}></input>
                        <label htmlFor="radioButtonThree" className="palette-grid grid-three">
                            <div className="palThree_colOne"></div>
                            <div className="palThree_colTwo"></div>
                            <div className="palThree_colThree"></div>
                        </label>

                        <input type="radio" id="paletteFour" handleInputValue={this.props.handleInputValue}
                            className="radio_button rb_four" name="palette" value="4" onChange={this.handlePaletteChange} checked={this.props.checked === "4" ? true : false}></input>
                        <label htmlFor="radioButtonFour" className="palette-grid grid-four">
                            <div className="palFour_colOne"></div>
                            <div className="palFour_colTwo"></div>
                            <div className="palFour_colThree"></div>
                        </label>
                    </div>
                </div>
            </div>
          );
       }
    }

export default Design