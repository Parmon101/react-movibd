import React, {useState} from "react";

export function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  // const apiKey = '5ce592e52abc436bccf77a0ccd9ed056'
  // const urlKey = 'https://api.themoviedb.org/3';
  // const popular = `${urlKey}/movie/popular`

  // let popular = 'https://api.themoviedb.org/3/movie/popular?api_key=5ce592e52abc436bccf77a0ccd9ed056&language=en-US&page=1'

  const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5ce592e52abc436bccf77a0ccd9ed056&query=${query}`;
      try{
        const res = await fetch(url);
        const data  = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err)
      }
  }

  return (
    <>
    <form className="form" onSubmit={searchMovies}>
      <input className="input" type="text" name="query"
        placeholder="Input name film"
        value={query} onChange={(e) => setQuery(e.target.value)}
        />
      <button className="button" type="submit">Search</button>
    </form>
    <div className="card-list">
      {movies.filter(movie => movie.poster_path).map(movie => (
        <div className="card" key={movie.id}>
          <h3 className="card--title">{movie.title}</h3>
          <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
          <div className="card--content">
          </div>
        </div>
      ))}
    </div>    
    </>
  )
}

// https://api.themoviedb.org/3/movie/popular?api_key=5ce592e52abc436bccf77a0ccd9ed056&language=en-US&page=1
