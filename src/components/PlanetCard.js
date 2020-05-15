import React, { Component } from 'react';
import '../assets/style/Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    offset: 400,
    duration: 800
});

class PlanetCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            planetHeader: "Planets APIs",
            planet1: [],
            planet2: [],
            planet3: []
       
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        Promise.all([fetch("https://swapi.dev/api/planets/1/"), fetch("https://swapi.dev/api/planets/2/"), fetch("https://swapi.dev/api/planets/3/")])

            .then(([response1, response2, response3]) =>  {
                return Promise.all ([response1.json(), response2.json(), response3.json()])
            })
            .then(data => {
                this.setState({
                    loading: false,
                    planet1: data[0],
                    planet2:data[1],
                    planet3: data[2]
                })
            })
    }
 
    render() {
        return (
            <div className="cards-container" id="planets">
                <h2 className="cards-header">{this.state.loading === true ? "Loading..." :  this.state.planetHeader }</h2>
            <div className="cards-wrapper">

            <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src="https://lumiere-a.akamaihd.net/v1/images/Tatooine_36689d1b.jpeg?region=0%2C0%2C1536%2C864&width=960" alt="tatooine" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail">
                    <span className="card-detail-bold">Name: </span> 
                    {this.state.planet1.name}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Climate: </span> 
                     {this.state.planet1.climate}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Terrain: </span> 
                    {this.state.planet1.terrain}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Population: </span> 
                    {this.state.planet1.population}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Gravity: </span> 
                    {this.state.planet1.gravity}
                </li>

                </ul>
                </div>
                </div>

                <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src="https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960" alt="Alderaan" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail">
                    <span className="card-detail-bold">Name: </span> 
                    {this.state.planet2.name}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Climate: </span> 
                     {this.state.planet2.climate}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Terrain: </span> 
                    {this.state.planet2.terrain}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Population: </span> 
                    {this.state.planet2.population}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Gravity: </span> 
                    {this.state.planet2.gravity}
                </li>

                </ul>
                </div>
                </div>
                    <div className="card-container" data-aos="flip-left">
                    <div className="card-image"><img src="https://i.redd.it/ig9ectnjbgsz.jpg" alt="Yavin IV" className="card-img"/></div>
                    <div className="card-body">
                    <ul className="card-details">
                    <li className="card-detail">
                        <span className="card-detail-bold">Name: </span> 
                        {this.state.planet3.name}
                    </li>
    
                    <li className="card-detail">
                        <span className="card-detail-bold">Climate: </span> 
                         {this.state.planet3.climate}
                    </li>
    
                    <li className="card-detail">
                        <span className="card-detail-bold">Terrain: </span> 
                        {this.state.planet3.terrain}
                    </li>
                    
                    <li className="card-detail">
                        <span className="card-detail-bold">Population: </span> 
                        {this.state.planet3.population}
                    </li>
                    
                    <li className="card-detail">
                        <span className="card-detail-bold">Gravity: </span> 
                        {this.state.planet3.gravity}
                    </li>
    
                    </ul>
                    </div>
                    </div>

                    </div>
                </div>
            
        )
    }
}

export default PlanetCard;
