import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import MovieRow from './components/Movies/MovieRow'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <MovieRow title="Popular Movies" data="https://api.themoviedb.org/3/movie/popular?api_key=3718a40f403464ce5d655d1b224420cf&language=en-US&page=1"/>
      <MovieRow title="Trending Movies" data="https://api.themoviedb.org/3/trending/all/week?api_key=3718a40f403464ce5d655d1b224420cf&language=en-US"/>
      <MovieRow title="Comedy Movies" data="https://api.themoviedb.org/3/discover/movie?api_key=3718a40f403464ce5d655d1b224420cf&with_genres=35"/>
    </div>
  );
}

export default App;
