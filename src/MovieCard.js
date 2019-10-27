import React, { Component } from 'react';
import './CardData.css';
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
        Promise.all ([fetch("https://swapi.co/api/films/6/"), fetch("https://swapi.co/api/films/7/"),
        fetch("https://swapi.co/api/films/3/") ])
        .then(([response1, response2, response3]) =>  {
            return Promise.all ([response1.json(), response2.json(), response3.json()])
        })
        .then(data => {
            console.log(data);
            this.setState({
                loading: false,
                movie1: data[0],
                movie2:data[1],
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

            <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src="https://img.cinemablend.com/quill/2/3/2/e/2/e/232e2e0b674c925b4dc746a321a0aae2fa357462.jpg" alt="revenge of the sith" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Title:</span> {this.state.movie1.title}</li>
                <li className="card-detail"><span className="card-detail-bold">Directed By:</span> {this.state.movie1.director}</li>
                <li className="card-detail movie-description">{this.state.movie1.opening_crawl}</li>
                </ul>
            </div>
            </div>


            <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src="https://img.cinemablend.com/filter:scale/quill/3/8/3/d/f/9/383df9da6260856599d9a6284f12628a355f4ea7.jpg?mw=600" alt="the force awakens" className="card-img"/></div>
                <div className="card-body">
                <ul className="card-details">
                <li className="card-detail"><span className="card-detail-bold">Title:</span> {this.state.movie2.title}</li>
                <li className="card-detail"><span className="card-detail-bold">Directed By:</span> {this.state.movie2.director}</li>
                <li className="card-detail movie-description">{this.state.movie2.opening_crawl}</li>
                </ul>
            </div>
            </div>


            <div className="card-container" data-aos="flip-left">
                <div className="card-image"><img src="https://img.cinemablend.com/filter:scale/quill/b/4/e/f/0/7/b4ef07881ae19e2df9dc1a5617e3108c4e47649f.jpg?mw=600" alt="return of the jedi" className="card-img"/></div>
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
