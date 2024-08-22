import React, { useState, useEffect, useCallback } from 'react';
import MovieList from '../components/MovieList';
import { getMoviesByType, getAllMovies } from '../services/movieService';

const HomePage = () => {
  const [selectedType, setSelectedType] = useState('movies-coming');
  const [movieTypes] = useState(['movies-coming', 'movies-in-theaters', 'top-rated-indian', 'top-rated-movies']);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies(selectedType);
    fetchAllMovies();
  }, [selectedType]);

  const fetchMovies = async (type) => {
    try {
      const data = await getMoviesByType(type);
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchAllMovies = async () => {
    try {
      const allData = await getAllMovies();
      setAllMovies(allData);
    } catch (error) {
      console.error('Error fetching all movies:', error);
    }
  };

  const handleSearch = useCallback(() => {
    if (searchQuery === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies, allMovies]);

  useEffect(() => {
    handleSearch();
  }, [movies, searchQuery, handleSearch]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSearchQuery('');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl">Movies on the Tip</h1>
        <nav className="mt-2">
          {movieTypes.map(type => (
            <button
              key={type}
              className={`btn mr-2 ${selectedType === type ? 'bg-gray-800' : ''}`}
              onClick={() => handleTypeChange(type)}
            >
              {type === 'top-rated-indian' ? 'Top Rated Indian' : type === 'top-rated-movies' ? 'Top Rated Movies' : type.replace('-', ' ')}
            </button>
          ))}
        </nav>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 w-full border rounded text-black"
          />
        </div>
      </header>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
