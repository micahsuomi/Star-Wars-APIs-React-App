import React, { Component } from 'react';
import './AboutMe.css';

export class HideText extends Component {
    constructor(props) {
        super(props); 
            this.state={
                textDisplay: true,
                buttonText1: "view more",
                buttonText2: "view less",

            }
            this.ToggleButton = this.ToggleButton.bind(this);
        
    }
    ToggleButton(){
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay,
            buttonText1: "view less"
            
        }));
 }
    render() {
        return (
            <div className="hide-text-container">
                <p className="about-description">{!this.state.textDisplay && this.props.text}</p>
                 <button className="btn-more" onClick = {this.ToggleButton}>{this.state.buttonText1}</button>
                </div>
        )
    }
}

export default HideText
