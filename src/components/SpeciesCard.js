import React from 'react';
import '../assets/style/Card.css';

const SpeciesCard = (props) => {
    const {name, classification, language, height, skin, eye, lifeSpan, url} = props;
    let speciesImg = 'https://www.geekgirlauthority.com/wp-content/uploads/2020/02/sentient-aliens-from-star-wars-1200x640.png';
    let images = [
        {
            img: 'https://s3.amazonaws.com/gs-geo-images/493fc9e7-a9ed-4d90-9704-f4b44955cba0.jpg'
        },
        {
            img: 'https://www.denofgeek.com/wp-content/uploads/2017/01/star-wars-droids.jpg?resize=768%2C432'
        },
        {
            img: 'https://img.cinemablend.com/filter:scale/quill/e/8/e/8/e/0/e8e8e0643843a5076caef010f47e521887f4c5f2.jpg?mw=600'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/databank_rodian_01_169_f99ec4ae.jpeg?region=0%2C49%2C1560%2C780'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/image_659e2fa6.jpeg?region=129%2C0%2C1437%2C808&width=960'
        },
        {
            img: 'https://sm.ign.com/t/ign_nordic/gallery/t/tracing-th/tracing-the-mystery-of-yoda-yaddle-and-baby-yodas-species_3hke.1080.jpg'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/databank_trandoshan_01_169_26a8a28f.jpeg?region=0%2C49%2C1560%2C780'
        },
        {
            img: 'https://www.syfy.com/sites/syfy/files/wire/legacy/ackbar_0.jpg'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C49%2C1560%2C780'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C49%2C1560%2C780'
        }
    ]
    let index = 0;
    let image 
   
    if(name.includes('Human')) {
        image = images[index].img
        console.log(images)
    } else if(name.includes('Droid')) {
        index = 1;
        image = images[index].img
     } else if(name.includes('Wookie')) {
        index = 2
        image = images[index].img
    }   else if(name.includes('Rodian')) {
        index = 3
        image = images[index].img
    }  else if(name.includes('Hutt')) {
        index = 4
        image = images[index].img
    }  else if(name.includes('Yoda\'s species')) {
        index = 5
        image = images[index].img
    }  else if(name.includes('Trandoshan')) {
        index = 6
        image = images[index].img
    }  else if(name.includes('Mon Calamari')) {
        index = 7
        image = images[index].img
    } else if(name.includes('Ewok')) {
        index = 8
        image = images[index].img
    } else if(name.includes('Sullustan')) {
        index = 9
        image = images[index].img
    } 
    else {
        image = speciesImg
    }

    return (
            <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src={image} style={{width: '100%', height: '20rem'}} alt={name} className="card-img"/></div>
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
