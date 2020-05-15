import React from 'react';
import '../assets/style/Card.css';

const SpeciesCard = (props) => {
    const {img, name, classification, language, height, skin, eye, lifeSpan, url} = props;
    let speciesImg = 'https://lumiere-a.akamaihd.net/v1/images/image_659e2fa6.jpeg?region=129%2C0%2C1437%2C808&width=960'
    return (
            <div className="card-container" data-aos="flip-left">
                <img src={speciesImg} className="card-img" alt="star wars species card" /> 
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span>{name} </li>
                <li className="card-detail"><span className="card-detail-bold">Classification: </span>{classification} </li>
                <li className="card-detail"><span className="card-detail-bold">Language: </span> {language}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {height}</li>
                <li className="card-detail"><span className="card-detail-bold">Skin Color: </span> {skin}</li>
                <li className="card-detail"><span className="card-detail-bold">Eye Color: </span> {eye}</li>
                <li className="card-detail"><span className="card-detail-bold">Life Span: </span> {lifeSpan}</li>
                <li className="card-detail"><span className="card-detail-bold">URL: </span><a href={url} target="blank">{url}</a></li>

                </ul>
            </div>
            </div>

       
    )
}

export default SpeciesCard;
