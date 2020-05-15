import React, { Component } from 'react';
import SpeciesCard from './SpeciesCard';
import {speciesData} from './SpeciesData';



class SpeciesCardList extends Component {
    constructor(props) {
        super();
        this.state = {
            loading: false,
            title: "Species APIs",
            cardsData: [],
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/species/")
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            for(const specie of data.results) {
                console.log(specie)
            }

            this.setState({
                loading: true,
                cardsData: data.results
                
            })
            
        }) 
    }

   
    render() {
      
        const cardsData = this.state.cardsData.map((card, index) => (
            <SpeciesCard 
            key = {index}
            name = {card.name}
            height={card.average_height}
            classification = {card.classification}
            language = {card.language}
            skin={card.skin_colors}
            eye={card.eye_colors} 
            lifeSpan={card.average_lifespan}
            url={card.url}/>

            ))

        
        return (
            <div className="cards-container" id="movies">
            <h2 className="cards-header">{this.state.loading ? this.state.title : "Loading..."}</h2>
                <div className="cards-wrapper">
                    {cardsData} 
            </div>
            </div>

        )
    }
}

export default SpeciesCardList;
