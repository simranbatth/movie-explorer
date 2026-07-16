import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//  najuck testing
console.log(import.meta.env);
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {

  const [movies, setMovies] = useState([]);

  console.log("API KEY:", API_KEY);

  useEffect(() => {

    console.log("useEffect running");

    const getMovies = async () => {

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`
      );

      const data = await response.json();

      console.log("API RESPONSE:", data);

      setMovies(data.Search || []);

    };

    getMovies();

  }, []);


  return (
    <>
      <Navbar />
      <Hero />

      <h2>Popular Movies</h2>

      {
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))
      }

    </>
  );
}

export default Home;