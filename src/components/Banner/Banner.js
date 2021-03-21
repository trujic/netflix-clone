import { useState, useEffect } from 'react'
import axios from 'axios'
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=3718a40f403464ce5d655d1b224420cf&with_networks=213`);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  console.log(movie)

  const words = (string, n) => {
    return string?.length > n ? string.substr(0, n) + " ..." : string
  }

  return(
    <header className="banner"
    style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    }}
    >
      <div className="movie__info">
        <h1>{movie.name}</h1>
        <h3>{words(movie.overview, 140)}</h3>
        <div className="movie__cta">
          <button className="cta">Play</button>
          <button className="cta">More Info</button>
        </div>
      </div>
      <div className="fade" />
    </header>
  )
}

export default Banner
