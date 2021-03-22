import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Movie.css"

const MovieRow = ({title, data, isLarge}) => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(data);
      setMovieList(request.data.results)
    }
    fetchData()
  }, [data])

  console.log(movieList)

  return(
    <div className="movies">
      <h1>{title}</h1>
      <div className="movie__row">
        {movieList.map(movie => {
          return(
            <div className="movie">
              {isLarge ? <img className="poster__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> : <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MovieRow
