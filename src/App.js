import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import MovieCard from './components/MovieCard';
import CharacterList from './components/CharacterList';
import PlanetCard from './components/PlanetCard';
import SpeciesCardList from './components/SpeciesCardList';
import StarshipCard from './components/StarshipCard';
import MovieRating from './components/MovieRating';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

/*
AOS.init({
    offset: 400,
    duration: 800
  });
AOS.init({
  disable: function() {
    let maxWidth = 550;
    return window.innerWidth < maxWidth;
  }

})*/

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path={'/about'} component={About} />
      <Route path={'/movies'} component={MovieCard} />
      <Route path={'/characters'} component={CharacterList} />
      <Route path={'/planets'} component={PlanetCard} />
      <Route path={'/starships'} component={StarshipCard} />
      <Route path={'/species'} component={SpeciesCardList} />
      <Route path={'/movieratings'} component={MovieRating} />
      <Route path={'/aboutme'} component={AboutMe} />
      <Route path={'/'} component={Header} /> 
      </Switch>

      <Footer />

    </div>
    </Router>

  );
}

export default App;
