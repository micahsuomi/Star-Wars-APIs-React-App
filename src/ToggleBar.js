import React, { Component } from 'react';
import './ToggleBar.css';

class ToggleBar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="hamburger-container">
                <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                </div>
            </div>
        )
    }
}

export default ToggleBar;
