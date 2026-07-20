import { Link } from "react-router-dom";
import "../styles/MovieCard.css";
function MovieCard ({ movie}) {
    return (
        <div className="movie-card">
            <img 
            src={movie.poster}
            alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>📅 {movie.year}</p>

      <p>⭐ {movie.rating}</p>

      <p>🎭 {movie.genre}</p>
      <Link to={`/movie/${movie.id}`}>
      <button>View Details</button>
      </Link>


        </div>
    );
}
export default MovieCard;