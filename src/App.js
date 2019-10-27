import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import MovieCard from './MovieCard';
import CharacterCard from './CharacterCard';
import PlanetCard from './PlanetCard';
import StarshipCard from './StarshipCard';
import MovieRating from './MovieRating';
import AboutMe from './AboutMe';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <MovieCard />
      <CharacterCard />
      <PlanetCard />
      <StarshipCard />
      <MovieRating />
      <AboutMe />
      <Footer />

    </div>
  );
}

export default App;
