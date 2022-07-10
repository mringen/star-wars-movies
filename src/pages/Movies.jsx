import { useState, useEffect } from "react"
import SearchBar from "../components/searchBar"
import MovieList from "../components/movieList"
import { fetchMovies } from "../functions/fetching"

const Movies = () => {
const [movies, setMovies] = useState([])
const [sortByValue, setSortByValue] = useState(false)
const [searchByString, setSearchByString] = useState('')
  
  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies()
      setMovies(fetchedMovies)
    }
    getMovies()
  }, [])

  return (
    <div>
      <SearchBar setSortByValue={(e) => setSortByValue(e)} setSearchByString={(e) => setSearchByString(e)} />
      <MovieList movies={movies} sortByValue={sortByValue} searchByString={searchByString} />
    </div>
  )
}
export default Movies