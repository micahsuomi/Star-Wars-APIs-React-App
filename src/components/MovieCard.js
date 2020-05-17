import React, { Component } from 'react';
import '../assets/style/Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            moviesHeader: "Movies APIs",
            movie1: [],
            movie2: [],
            movie3: []


       
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        Promise.all ([fetch("https://swapi.dev/api/films/6/"), fetch("https://swapi.dev/api/films/1/"),
        fetch("https://swapi.dev/api/films/3/") ])
        .then(([response1, response2, response3]) =>  {
            return Promise.all ([response1.json(), response2.json(), response3.json()])
        })
        .then(data => {
            this.setState({
                loading: false,
                movie1: data[0],
                movie2: data[1],
                movie3: data[2]
            })
        })

        AOS.init({
            offset: 400,
            duration: 800
        });
    }

    
    render() {
        return (
            <div className="cards-container" id="movies">
            <h2 className="cards-header">{this.state.loading === true ? "Loading..." :  this.state.moviesHeader }</h2>
                <div className="cards-wrapper">

            <div className="card-container movie-card" data-aos="flip-left">
                <div className="card-image"><img src="https://img.cinemablend.com/quill/2/3/2/e/2/e/232e2e0b674c925b4dc746a321a0aae2fa357462.jpg" alt="revenge of the sith" className="card-img" style={{width: '100%', height: '20rem'}}/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Title:</span> {this.state.movie1.title}</li>
                <li className="card-detail"><span className="card-detail-bold">Directed By:</span> {this.state.movie1.director}</li>
                <li className="card-detail movie-description">{this.state.movie1.opening_crawl}</li>
                </ul>
            </div>
            </div>


            <div className="card-container movie-card" data-aos="flip-left">
                <div className="card-image">
                    <img src="https://i0.wp.com/movieassault.com/wp-content/uploads/2018/07/starwars.jpg?resize=810%2C360" alt="a new hope" className="card-img" style={{width: '100%', height: '20rem'}}/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Title:</span> {this.state.movie2.title}</li>
                <li className="card-detail"><span className="card-detail-bold">Directed By:</span> {this.state.movie2.director}</li>
                <li className="card-detail movie-description">{this.state.movie2.opening_crawl}</li>
                </ul>
            </div>
            </div>


            <div className="card-container movie-card" data-aos="flip-left">
                <div className="card-image"><img src="https://img.cinemablend.com/filter:scale/quill/b/4/e/f/0/7/b4ef07881ae19e2df9dc1a5617e3108c4e47649f.jpg?mw=600" alt="return of the jedi" className="card-img" style={{width: '100%', height: '20rem'}}/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Title:</span> {this.state.movie3.title}</li>
                <li className="card-detail"><span className="card-detail-bold">Directed By:</span> {this.state.movie3.director}</li>
                <li className="card-detail movie-description">{this.state.movie3.opening_crawl}</li>
                </ul>
            </div>
            </div>


            </div>
            </div>
           

        )
    }
}

export default MovieCard;
