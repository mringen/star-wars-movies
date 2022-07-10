import { useState } from "react"
import { sortMovies } from "../functions/sort"
import { filterMovies } from "../functions/filter"

const MovieList = ({movies, sortByValue, searchByString}) => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  
  const renderMovies = () => {
    if(movies?.length > 0) {
      let movieLists = sortByValue ? sortMovies([...movies], sortByValue) : movies
      if(searchByString) movieLists = filterMovies([...movieLists], searchByString)
      return movieLists.map((movie, i) => {
        return (
          <div className="movie-row" key={movie.episode_id} onClick={() => setSelectedMovie(i)}>
            <span className="column-left">Episode {movie.episode_id}</span>
            <span className="column-middle">{movie.title}</span>
            <span className="column-right">{movie.release_date}</span>
          </div>
        )
      })
    }
    else 
    return <div className="waiting-for-movie">Waiting for movies</div>
  }

  const renderDescription = () => {
    if(typeof selectedMovie === 'number') {
      return <div className="description-text">
        <h3>{movies[selectedMovie].title}</h3>
        <div>{movies[selectedMovie].opening_crawl}</div>
        <h6>Directed by: {movies[selectedMovie].director}</h6>
      </div>
  }
    else return <div className="no-movie">No movie selected</div>
  }

  return (
    <div className="movie-list">
      <div className="movies">{renderMovies()}</div>
      <div className="movie-description">{renderDescription()}</div>
    </div>
  )
}
export default MovieList