import React from 'react';
import '../../stylesheets/Collapsables.scss';


class CollapsableItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleCLick = this.handleCLick.bind(this)
    }

    handleCLick(evt){
        this.props.handleCollapse(evt.currentTarget.id)
    }

    render() {
        
        return (
           <div className="Collapsable__container">
                <div id={this.props.id} className="collapseTitle" onClick={this.handleCLick}>
                    <h2 className="form__title"><i className={this.props.icon}></i>{this.props.collapsableTitle}</h2>
                    <button className= {`form__arrow--design ${this.props.rotatearrow === this.props.id ? "rotate" : ""}`} aria-label="Desplegar">
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div className={`newHidden ${this.props.activePanel === this.props.id ? "active" : ""}`}>
                    {this.props.children}   
                </div>
            </div>
        );
    }
}
export default CollapsableItem;