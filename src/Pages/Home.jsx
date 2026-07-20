import MovieCard from "./MovieCard.jsx";
import { useState, useEffect } from "react";
import '../css/Home.css'
import {searchMovies, getPopularMovies } from "../services/api.js"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const[movies, setMovies] = useState([]);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }catch (err){
        setError("Faield to load")
      }
      finally{
        setLoading(false)
      }
      }
    
    loadPopularMovies()
  },[])


function handleSearch(e) {
  e.preventDefault;

}
return (
  <div className="home">
    <form onClick={handleSearch} className="search-form">
      <input
        placeholder="Search for movies"
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
)
}

export default Home;
