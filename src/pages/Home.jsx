import { useState } from "react";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies";
import "../styles/Home.css";
function Home() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    setMovies(filteredMovies);
  };

  return (
    <>
      <Hero />

      <section className="search-section">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </section>

      <section className="movies-section">
        <h2>Popular Movies</h2>

        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <h3>No Movies Found 😔</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;