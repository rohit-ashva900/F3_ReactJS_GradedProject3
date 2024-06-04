

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import MovieDetail from '../components/MovieDetail';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id); // Pass id as string
      if (data) {
        setMovie(data);
      } else {
        alert('Movie not found');
        navigate('/');
      }
    };

    fetchMovie();
  }, [id, navigate]);

  if (!movie) return <div>Loading...</div>;

  return <MovieDetail movie={movie} onClose={() => navigate(-1)} />;
};

export default MovieDetailPage;
