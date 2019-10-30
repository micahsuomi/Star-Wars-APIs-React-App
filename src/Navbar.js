import React, {Component} from 'react';
import './Navbar.css';



class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            home: "Home",
            about: "About",
            movies: "Movies",
            characters: "Characters",
            planets: "Planets",
            starships: "Starships",
            movieRatings: "Movie Ratings",
            contact: "About Me",
            addClass: true,
            hidelineClass: false,
             
        }

        this.toggle = this.toggle.bind(this);
        
    }
    toggle() {
        this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass        });
    }
    

    render() {
        let navLinksClass = ["navbar-links open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }


        return(
            <div className="navbar">
                <img className="logo" src="http://graphichive.net/uploaded/fordesigner/1313321222.jpg" alt="logo" />
                <ul className={navLinksClass.join('')}>
                    <li className="nav-link"><a href="#home">{this.state.home}</a></li>
                    <li className="nav-link"><a href="#about">{this.state.about}</a></li>
                    <li className="nav-link"><a href="#movies">{this.state.movies}</a></li>
                    <li className="nav-link"><a href="#characters">{this.state.characters}</a></li>
                    <li className="nav-link"><a href="#planets">{this.state.planets}</a></li>
                    <li className="nav-link"><a href="#starships">{this.state.starships}</a></li>
                    <li className="nav-link"><a href="#movieRatings">{this.state.movieRatings}</a></li>
                    <li className="nav-link"><a href="#contact">{this.state.contact}</a></li>

                </ul>
                <div className="hamburger-bar-placeholder">
                <div className="hamburger-container">
                    <div className="hamburger" onClick={this.toggle}>{this.state.addClass}
                    <div className={"line"}>{this.state.addSecondClass}</div>
                    <div className={"line"}>{this.state.addThirdClass}</div>
                    <div className={"line"}>{this.state.addFourthClass}</div>
                    </div>
            </div>                
            </div>
            </div>
            
        )

    }
}


export default Navbar;