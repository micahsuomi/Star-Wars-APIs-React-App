import React from 'react';
import './App.css';
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
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <MovieCard />
      <CharacterList />
      <PlanetCard />
      <StarshipCard />
      <SpeciesCardList />
      <MovieRating />
      <AboutMe />
      <Footer />

    </div>
  );
}

export default App;
