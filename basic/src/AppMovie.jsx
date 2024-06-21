import React, { useState, useEffect } from "react";

// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year

export default function AppMovie() {
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
              <div key={movie.id}>
                <img src={movie.medium_cover_image} alt="영화 이미지" />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g, index) => (
                    <li key={index}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
