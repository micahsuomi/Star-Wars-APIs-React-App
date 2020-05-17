import React,  {Component} from 'react';
import '../assets/style/Star.css';

class Star extends Component {
    constructor() {
        super();
        this.state={
            score: "",
            smiley: "",
            isPoorClicked: false,
            isAverageClicked: false,
            isGoodClicked: false,
        };
    
        this.scorePoor = this.scorePoor.bind(this);
        this.scoreMedium = this.scoreMedium.bind(this);
        this.scoreGood = this.scoreGood.bind(this);


    }

    scorePoor() {
        this.setState({
        score: "POOR",
        smiley:"😒",
        isPoorClicked: true,
        isAverageClicked: false,
        isGoodClicked: false,

    })
    }

    scoreMedium() {
        this.setState({
        score: "AVERAGE",
        smiley: "😐",
        isPoorClicked: false,
        isAverageClicked: true,
        isGoodClicked: false,

    })

    }

    scoreGood() {
        this.setState({
        score: "GOOD",
        smiley: "🙂",
        isPoorClicked: false,
        isAverageClicked: false,
        isGoodClicked: true
    })
    }

    render() {
        return(
            <div>
            <div className="stars-wrapper">
                    <i className="far fa-star fa-2x red" 
                    onClick={this.scorePoor}
                    style={this.state.isPoorClicked ? {color: 'rgb(226, 79, 79)'} : {color: 'black'}}>
                    </i>    

                    <i className="far fa-star fa-2x orange" 
                    onClick={this.scoreMedium}
                    style={this.state.isAverageClicked ? {color: 'orange'} : {color: 'black'}}>
                    </i>

                    <i className="far fa-star fa-2x green" 
                    onClick={this.scoreGood}
                    style={this.state.isGoodClicked ? {color: 'green'} : {color: 'black'}}>
                    </i>     
            </div>
                
                <div className="score">{this.state.score}{this.state.smiley}</div>


                </div>


        )
    }
}

let styleOrange = {backgroundColor: 'red'}

export default Star;