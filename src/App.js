import React from 'react'

import './App.css';
import { SearchMovies } from './components/search/Search';
import { PopularMovie } from './components/cardFilm/PopularMovie';
// import App from './components/App';

function App() {

  return (
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
        <PopularMovie/>
    </div>
  );
}

export default App;
