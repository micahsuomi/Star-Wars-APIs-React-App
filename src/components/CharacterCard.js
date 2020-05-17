import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const CharacterCard = (props) => {
    let {name, gender, height, mass, birthYear} = props;
    let characterImg = 'https://cdn.onebauer.media/one/empire-images/features/57e3dfe50c6437272f5f6602/characters.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg'
    let images = [
        {
            img: 'https://s3.amazonaws.com/gs-geo-images/493fc9e7-a9ed-4d90-9704-f4b44955cba0.jpg'
        },
        {
            img: 'https://www.episodi.fi/wp-content/uploads/C-3PO-Anthony_Daniels_The_Revenge_of_the_Sith.jpeg'
        },
        {
            img: 'https://muropaketti.com/wp-content/uploads/2019/02/star-wars-r2-d2.jpg'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C34%2C1400%2C699'
        },
        {
            img: 'https://starwarsblog.starwars.com/wp-content/uploads/2018/07/leia-organa-1-tall.jpg'
        },
        {
            img: 'https://i.pinimg.com/originals/01/47/c5/0147c5713f973e0dd6b592b51e305368.jpg'
        },
        {
            img: 'https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666'
        },
        {
            img: 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780'
        },
        {
            img: 'https://img.gameme.eu/tv/454555139.jpg'
        }
    ]
    let index = 0;
    let image 
    
    if(name.includes('Luke Skywalker')) {
        image = images[index].img
        console.log(images)
    } else if(name.includes('C-3PO')) {
        index = 1;
        image = images[index].img
     } else if(name.includes('R2-D2')) {
        index = 2
        image = images[index].img
    }   else if(name.includes('Darth Vader')) {
        index = 3
        image = images[index].img
    }  else if(name.includes('Leia Organa')) {
        index = 4
        image = images[index].img
    }  else if(name.includes('Owen Lars')) {
        index = 5
        image = images[index].img
    }  else if(name.includes('Beru Whitesun lars')) {
        index = 6
        image = images[index].img
    }  else if(name.includes('R5-D4')) {
        index = 7
        image = images[index].img
    } else if(name.includes('Biggs Darklighter')) {
        index = 8
        image = images[index].img
    } else if(name.includes('Obi-Wan Kenobi')) {
        index = 9
        image = images[index].img
    } 
    else {
        image = characterImg
    }

    AOS.init({
        offset: 400,
        duration: 800
      });

    return (
        <div>
            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src={image} style={{width: '100%', height: '20rem'}} alt={name} className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span> {name}</li>
                <li className="card-detail"><span className="card-detail-bold">Gender: </span> {gender}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {height}</li>
                <li className="card-detail"><span className="card-detail-bold">Mass: </span> {mass}</li>
                <li className="card-detail"><span className="card-detail-bold">Birth Year: </span> {birthYear}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default CharacterCard;
