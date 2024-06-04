
import React from 'react';

const MovieDetail = ({ movie, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl relative">
      <button className="absolute top-0 right-0 m-4 text-2xl text-gray-700 hover:text-gray-900" onClick={onClose}>&times;</button>
      <div className="flex flex-col md:flex-row">
        <img 
          src={movie.posterurl} 
          alt={movie.title} 
          className="w-full md:w-1/2 h-auto max-h-96 object-cover rounded-md shadow-md" 
        />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <p>year: {movie.year}</p>
          <p>genres: {movie.genres}</p>
          <p>imdbRating: <b>{movie.imdbRating}</b> </p>
          <p>actors: {movie.actors}</p>
          <p>storyline: {movie.storyline}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetail;
