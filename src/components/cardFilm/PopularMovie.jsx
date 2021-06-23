import React, {useState} from "react";

export function PopularMovie () {

  const [movies, setMovies] = useState([]);
  
  // let popular = 'https://api.themoviedb.org/3/movie/popular?api_key=5ce592e52abc436bccf77a0ccd9ed056&language=en-US&page=1'
  // const apiKey = '5ce592e52abc436bccf77a0ccd9ed056'
  // const urlKey = 'https://api.themoviedb.org/3';
  // const popular = `${urlKey}/movie/popular`


  const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=5ce592e52abc436bccf77a0ccd9ed056&language=en-US&page=1`;
    
        const res = await fetch(url);
        const data  = await res.json();
        setMovies(data.results);
  
  }
  return (
    <>
    <form className="form" onSubmit={searchMovies}>
      <button className="input button" type="submit">Show popular</button>
    </form>


    <p>Popular</p>
    <div className="card-list popular">
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