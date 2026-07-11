import "../css/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster}
          className="movie-poster"
          alt={movie.title}
        ></img>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
