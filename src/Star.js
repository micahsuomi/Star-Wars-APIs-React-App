import React,  {Component} from 'react';
import './Star.css';


class Star extends Component {
    constructor() {
        super();
        this.state={
            score: "",
            smiley:""
        };
    
        this.scorePoor = this.scorePoor.bind(this);
        this.scoreMedium = this.scoreMedium.bind(this);
        this.scoreGood = this.scoreGood.bind(this);


    }

    scorePoor() {
        console.log('scored poor');
        this.setState({score: "POOR",
           smiley:"😒"})
    }

    scoreMedium() {
        console.log('scored average');
        this.setState({score: "AVERAGE",
        smiley: "😐"})

    }

    scoreGood() {
        console.log('scored good');
        this.setState({score: "GOOD",
        smiley: "🙂"})
    }

    render() {
        return(
            <div>
            <div className="stars-wrapper">
                    <i className="far fa-star fa-2x red" onClick={this.scorePoor}></i>     
                    <i className="far fa-star fa-2x orange" onClick={this.scoreMedium}></i>      
                    <i className="far fa-star fa-2x green" onClick={this.scoreGood}></i>     
            </div>
                
                <div className="score">{this.state.score}{this.state.smiley}</div>


                </div>


        )
    }
}

export default Star;