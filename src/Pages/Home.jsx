import MovieCard from "./MovieCard.jsx";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2021" },
  ];
}
function handleSearch(){

}
return (
  <div className="home">
    <form onClick={handleSearch} className="search-form">
      <input
        placeholder="Search for movies"
        type="text"
        className="search-input"
      ></input>
      <button className="search-btn" type="submit" >Search</button>
    </form>
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
);

export default Home;
