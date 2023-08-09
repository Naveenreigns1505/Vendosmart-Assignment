import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieSearch';
import {searchMovies} from "./components/movieService"

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
