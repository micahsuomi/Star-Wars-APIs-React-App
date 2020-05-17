import React, {Component} from 'react';
import '../assets/style/MovieRating.css';
import Star from './Star';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 100,
    duration: 100,
    delay: 10
});


class MovieRating extends Component {
    static defaultProps = {
        title: "Movie Ratings",

    }
    constructor() {
        super();
        this.state = {
            loading: false,
            movie1: [],
            movie2: [],            
            movie3: [],
            movie4: [],
            rate: "Rate this movie",
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        Promise.all ([fetch("https://swapi.dev/api/films/1/"), fetch("https://swapi.dev/api/films/6/"),
        fetch("https://swapi.dev/api/films/3/"), fetch("https://swapi.dev/api/films/4/") ])
        .then(([response1, response2, response3, response4]) =>  {
            return Promise.all ([response1.json(), response2.json(), response3.json(), response4.json()])
        })
        .then(data => {
            console.log(data);
            this.setState({
                loading: false,
                movie1: data[0],
                movie2:data[1],
                movie3: data[2],
                movie4: data[3]

            })
        })
    }

   
render() {
    return(
        <div className="movie-rating-container" id="movieRatings">
            <h2 className="movie-rating-header">{this.props.title}</h2>
            <div className="movie-rating-wrapper">

                <div className="movie-container" data-aos="fade-right">
                    <div className="movie-image-container">
                    <img src="https://img.cinemablend.com/filter:scale/quill/b/4/e/f/0/7/b4ef07881ae19e2df9dc1a5617e3108c4e47649f.jpg?mw=600" alt={this.state.movie1.title} className="movie-rating-img"/>
                    </div>
                        <div className="movie-rating-body-details">
                        <h4 className="movie-header movie-header-bold">Title: {this.state.movie1.title}</h4>
                        <h4 className="movie-header movie-header-bold">Director: {this.state.movie1.director}</h4>
                        <h4 className="movie-header movie-header-bold">Producer: {this.state.movie1.producer}</h4>

                        </div>
                        <div className="rate-movie">
                        <h4 className="movie-header movie-header-bold">{this.state.rate}</h4>
                              <Star />
                        </div>
                </div>

                <div className="movie-container" data-aos="fade-left">
                    <div className="movie-image-container">
                    <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/revengeofthesith.jpg" alt={this.state.movie2.title} className="movie-rating-img"/>
                    </div>
                        <div className="movie-rating-body-details">
                        <h4 className="movie-header movie-header-bold">Title: {this.state.movie2.title}</h4>
                        <h4 className="movie-header movie-header-bold">Director: {this.state.movie2.director}</h4>
                        <h4 className="movie-header movie-header-bold">Producer: {this.state.movie2.producer}</h4>

                        </div>
                        <div className="rate-movie">
                        <h4 className="movie-header movie-header-bold">{this.state.rate}</h4>
                              <Star />
                        </div>
                </div>

                <div className="movie-container"  data-aos="fade-right">
                    <div className="movie-image-container">
                    <img src="https://medias.spotern.com/spots/w640/110/110061-1532336916.jpg" alt={this.state.movie3.title} className="movie-rating-img"/>
                    </div>
                        <div className="movie-rating-body-details">
                        <h4 className="movie-header movie-header-bold">Title: {this.state.movie3.title}</h4>
                        <h4 className="movie-header movie-header-bold">Director: {this.state.movie3.director}</h4>
                        <h4 className="movie-header movie-header-bold">Producer: {this.state.movie3.producer}</h4>
                        </div>
                        <div className="rate-movie">
                        <h4 className="movie-header movie-header-bold">{this.state.rate}</h4>
                              <Star />
                        </div>
                </div>

                <div className="movie-container" data-aos="fade-left">
                    <div className="movie-image-container">
                    <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/the_phantom_menace_jar_jar_obi-wan_qui-gon.png" alt={this.state.movie4.title} className="movie-rating-img"/>
                    </div>
                        <div class="movie-rating-body-details">
                        <h4 className="movie-header movie-header-bold">Title: {this.state.movie4.title}</h4>
                        <h4 className="movie-header movie-header-bold">Director: {this.state.movie4.director}</h4>
                        <h4 className="movie-header movie-header-bold">Producer: {this.state.movie4.producer}</h4>

                        </div>
                        <div className="rate-movie">
                        <h4 className="movie-header movie-header-bold">{this.state.rate}</h4>
                              <Star />
                        </div>
                </div>

            </div>
            </div>

    )
}
}


export default MovieRating;