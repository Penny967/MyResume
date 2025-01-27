import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const [movies] = useState([
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "Titanic", genre: "Drama", releaseYear: 1997 },
    { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 }
  ]);

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  
  const genres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === "All Genres" 
    ? movies 
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <select 
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredMovies.map((movie) => (
          <li 
            key={movie.title}
            onClick={() => alert(`Clicked: ${movie.title}`)}
            style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
          >
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {movie.title}
            </div>
            <div style={{ fontSize: '16px' }}>
              <strong>genre：</strong>{movie.genre}
            </div>
            <div style={{ fontSize: '16px'}}>
              <strong>releaseYear：</strong>{movie.releaseYear}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;