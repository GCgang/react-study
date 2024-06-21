import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoaded(true);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        {!loaded ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
