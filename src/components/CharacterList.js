import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import '../assets/style/Card.css';
import { characterData } from './characterData';


const API = 'https://swapi.dev/api/people/?page=1'

class CharacterList extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            charactersHeader: "Characters APIs",
            characters: []
       
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({characters: data.results, loading: false})
        })
    }

    
    render() {
        const charactersList = this.state.characters.map((character, index) => (
            <CharacterCard key={index}
                           img={`${characterData.map((img) => img.img)}`}
                           name={character.name}
                           gender={character.gender}
                           height={character.height}
                           birthYear={character.birth_year}/>
        ))
        return (
            <div className="cards-container" id="characters">
            <h2 className="cards-header">{this.state.loading === true ? "Loading..." :  this.state.charactersHeader }</h2>
                <div className="cards-wrapper">
                {charactersList}

            </div>
            </div>
           

        )
    }
}

export default CharacterList;
