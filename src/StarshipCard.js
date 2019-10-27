import React, { Component } from 'react';
import './CardData.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    offset: 400,
    duration: 800
});

class StarshipCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            planetHeader: "Starships APIs",
            starship1: [],
            starship2: [],
            starship3: []
       
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        Promise.all([fetch("https://swapi.co/api/starships/2/"), fetch("https://swapi.co/api/starships/12/"), fetch("https://swapi.co/api/starships/15/")])

            .then(([response1, response2, response3]) =>  {
                return Promise.all ([response1.json(), response2.json(), response3.json()])
            })
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    starship1: data[0],
                    starship2:data[1],
                    starship3: data[2]
                })
            })
    }
 
    render() {
        return (
            <div className="cards-container" id="starships">
                <h2 className="cards-header">{this.state.loading === true ? "Loading..." :  this.state.planetHeader }</h2>
            <div className="cards-wrapper">

            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://i.redd.it/i2suu8w5na9z.jpg" alt="corvette" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail">
                    <span className="card-detail-bold">Name: </span> 
                    {this.state.starship1.name}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Starship Class: </span> 
                     {this.state.starship1.starship_class}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Manufacturer: </span> 
                     {this.state.starship1.manufacturer}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Length: </span> 
                    {this.state.starship1.length}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Crew: </span> 
                    {this.state.starship1.crew}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Cargo Capacity: </span> 
                    {this.state.starship1.cargo_capacity}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Max Speed: </span> 
                    {this.state.starship1.max_atmosphering_speed}
                </li>

                </ul>
                </div>
                </div>

                <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://static.turbosquid.com/Preview/2017/07/22__10_06_31/StarWarsXWingStarfighterYellow3dsmodel01.jpg3F48FDB7-7EB6-4F79-8081-F3A123BE5336Original.jpg" alt="x-wing" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail">
                    <span className="card-detail-bold">Name: </span> 
                    {this.state.starship2.name}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Starship Class: </span> 
                     {this.state.starship2.starship_class}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Manufacturer: </span> 
                     {this.state.starship2.manufacturer}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Length: </span> 
                    {this.state.starship2.length}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Crew: </span> 
                    {this.state.starship2.crew}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Cargo Capacity: </span> 
                    {this.state.starship2.cargo_capacity}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Max Speed: </span> 
                    {this.state.starship2.max_atmosphering_speed}
                </li>

                </ul>
                </div>
                </div>

                <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4b6af80-893e-4b73-aaeb-d0697534c0fb/dc4gp36-65afcc54-aecc-4706-97c1-a25f4b6fdf49.jpg/v1/fill/w_1192,h_670,q_70,strp/star_wars__executor_class_star_destroyer_by_silveralv_dc4gp36-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2I0YjZhZjgwLTg5M2UtNGI3My1hYWViLWQwNjk3NTM0YzBmYlwvZGM0Z3AzNi02NWFmY2M1NC1hZWNjLTQ3MDYtOTdjMS1hMjVmNGI2ZmRmNDkuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.i1EAgN936RItnE9NrDANBDZzsquwr8qHYZXEru3TqTY" alt="executor" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail">
                    <span className="card-detail-bold">Name: </span> 
                    {this.state.starship3.name}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Starship Class: </span> 
                     {this.state.starship3.starship_class}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Manufacturer: </span> 
                     {this.state.starship3.manufacturer}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Length: </span> 
                    {this.state.starship3.length}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Crew: </span> 
                    {this.state.starship3.crew}
                </li>

                <li className="card-detail">
                    <span className="card-detail-bold">Cargo Capacity: </span> 
                    {this.state.starship3.cargo_capacity}
                </li>
                
                <li className="card-detail">
                    <span className="card-detail-bold">Max Speed: </span> 
                    {this.state.starship3.max_atmosphering_speed}
                </li>

                </ul>
                </div>
                </div>

                

                    </div>
                </div>
            
        )
    }
}

export default StarshipCard;
