import React, { Component } from 'react';
import './CardData.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    offset: 400,
    duration: 800
});

class CharacterCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            charactersHeader: "Characters APIs",
            character1: [],
            character2: [],
            character3: []


       
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        Promise.all ([fetch("https://swapi.co/api/people/35/"), fetch("https://swapi.co/api/people/20/"),
        fetch("https://swapi.co/api/people/67/") ])
        .then(([response1, response2, response3]) =>  {
            return Promise.all ([response1.json(), response2.json(), response3.json()])
        })
        .then(data => {
            console.log(data);
            this.setState({
                loading: false,
                character1: data[0],
                character2:data[1],
                character3: data[2]
            })
        })
    }

    
    render() {
        return (
            <div className="cards-container" id="characters">
            <h2 className="cards-header">{this.state.loading === true ? "Loading..." :  this.state.charactersHeader }</h2>
                <div className="cards-wrapper">

            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://starwarsblog.starwars.com/wp-content/uploads/2019/03/johnston-padme-moments-tall.jpg" alt="pame amidala" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span> {this.state.character1.name}</li>
                <li className="card-detail"><span className="card-detail-bold">Gender: </span> {this.state.character1.gender}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {this.state.character1.height}</li>
                <li className="card-detail"><span className="card-detail-bold">Birth Year: </span> {this.state.character1.birth_year}</li>
                </ul>
            </div>
            </div>

            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=960" alt="yoda" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span> {this.state.character2.name}</li>
                <li className="card-detail"><span className="card-detail-bold">Gender: </span> {this.state.character2.gender}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {this.state.character2.height}</li>
                <li className="card-detail"><span className="card-detail-bold">Birth Year: </span> {this.state.character2.birth_year}</li>
                </ul>
            </div>
            </div>

            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://cdn.wccftech.com/wp-content/uploads/2019/01/WCCFstarwarsbattlefront2dooku-740x429.jpg" alt="dooku" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span> {this.state.character3.name}</li>
                <li className="card-detail"><span className="card-detail-bold">Gender: </span> {this.state.character3.gender}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {this.state.character3.height}</li>
                <li className="card-detail"><span className="card-detail-bold">Birth Year: </span> {this.state.character3.birth_year}</li>
                </ul>
            </div>
            </div>


            


            </div>
            </div>
           

        )
    }
}

export default CharacterCard;
