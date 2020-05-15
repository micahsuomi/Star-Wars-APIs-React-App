import React from 'react'

export const CharacterCard = (props) => {
    let {img, name, gender, height, birthYear} = props;
    let characterImg = 'https://cdn.onebauer.media/one/empire-images/features/57e3dfe50c6437272f5f6602/characters.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg'
    let images = [
        {
            img: 'https://s3.amazonaws.com/gs-geo-images/493fc9e7-a9ed-4d90-9704-f4b44955cba0.jpg'
        },
        {
            img: 'https://cdn.onebauer.media/one/empire-images/features/57e3dfe50c6437272f5f6602/characters.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg'
        },
        {
            img: 'https://cdn.cdon.com/media-dynamic/images/product/toy/dockorochfigurer/image0/star_wars_figur_r2-d2-40613940-2.jpg'
        }
    ]
    let index = 0;
    let image 
    for (const i in images) {
        let {img} = images[i]
        console.log(img)
    }
    if(name.includes('Luke Skywalker')) {
        images = images[index]
        console.log(images)
    } else if(name.includes('R2-D2')) {
        index = 2;
        images = images[index]

     } else {
        index = 1
        images = images[index]
    }
    console.log(images)

    return (
        <div>
            <div className="card-container" data-aos="flip-right">
                <div className="card-image"><img src={characterImg} alt="star wars character" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Name: </span> {name}</li>
                <li className="card-detail"><span className="card-detail-bold">Gender: </span> {gender}</li>
                <li className="card-detail"><span className="card-detail-bold">Height: </span> {height}</li>
                <li className="card-detail"><span className="card-detail-bold">Birth Year: </span> {birthYear}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default CharacterCard;
