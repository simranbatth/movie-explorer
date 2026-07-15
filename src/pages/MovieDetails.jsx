import moviePoster from "../assets/image.png";
import "../css/MovieDetails.css";
import FavoriteButton from "../components/FavoriteButton";
function MovieDetails(){

const movie={

title:"Movie Name",

poster: moviePoster,

rating:"8.8",

releaseDate:"2025",

overview:"Movie Description"

}

return(

<div className="movie-details">

<img src={movie.poster} alt={movie.title}/>

<div>

<h1>{movie.title}</h1>

<p>⭐ {movie.rating}</p>

<p>Release : {movie.releaseDate}</p>

<p>{movie.overview}</p>

<FavoriteButton

isFavorite={false}

onClick={()=>alert("Favorite Clicked")}

/>

</div>

</div>

)

}

export default MovieDetails;