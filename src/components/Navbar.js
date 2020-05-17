import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/Navbar.css';


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
            species: "Species",
            movieRatings: "Movie Ratings",
            contact: "About Me",
            addClass: true,
            hidelineClass: false,
             
        }

        this.toggle = this.toggle.bind(this);
        
    }
    toggle() {
        this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass});
    }
    

    render() {
        let navLinksClass = ["navbar-links open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }
        let {home, about, movies, characters, planets, starships, species, movieRatings, contact} = this.state

        return(
            <div className="navbar">
                <NavLink to="/">
                <img className="logo" src="http://graphichive.net/uploaded/fordesigner/1313321222.jpg" alt="logo" />
                </NavLink>
                <ul className={navLinksClass.join('')}>
                    <li className="nav-link">
                        <NavLink to='/'>
                        {home}
                        </NavLink>
                        </li>
                    <li className="nav-link">
                        <NavLink to='/about'>
                            {about}
                        </NavLink>
                    </li>

                    <li className="nav-link">
                    <NavLink to='/movies'>
                        {movies}
                        </NavLink></li>

                    <li className="nav-link">
                    <NavLink to='/characters'>
                        {characters}
                    </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to='/planets'>
                            {planets}
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to='/species'>
                            {species}
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to='/starships'>
                            {starships}
                        </NavLink>
                        </li>

                    <li className="nav-link">
                        <NavLink to='/movieratings'>
                            {movieRatings}
                        </NavLink>
                        </li>

                    <li className="nav-link">
                        <NavLink to='/aboutme'>
                            {contact}
                        </NavLink>
                        </li>

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