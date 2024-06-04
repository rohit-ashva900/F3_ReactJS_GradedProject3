
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addFavoriteMovie } from '../services/movieService';
import Popup from './Popup';  // Adjust the import path as necessary

const MovieCard = ({ movie }) => {
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddFavorite = () => {
    const result = addFavoriteMovie(movie);
    setPopupMessage(result.message);
  };

  const closePopup = () => {
    setPopupMessage('');
  };

  return (
    <div className="relative bg-white rounded shadow p-4 m-2 w-60">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.posterurl} alt={movie.title} className="w-full h-auto" />
        <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
      </Link>
      <button className="btn mt-2" onClick={handleAddFavorite}>Favorite</button>
      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default MovieCard;
