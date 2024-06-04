
// import React, { useState, useEffect } from 'react';
// import FavoriteList from '../components/FavoriteList';
// import { getFavoriteMovies, removeFavoriteMovie } from '../services/movieService';

// const FavoritesPage = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     setFavorites(getFavoriteMovies());
//   }, []);

//   const handleRemove = (id) => {
//     removeFavoriteMovie(id);
//     setFavorites(getFavoriteMovies());
//   };

//   return (
//     <div>
//       <header className="bg-blue-500 text-white p-4">
//         <h1 className="text-3xl">My Favorites</h1>
//       </header>
//       <FavoriteList movies={favorites} onRemove={handleRemove} />
//     </div>
//   );
// };

// export default FavoritesPage;
import React, { useState, useEffect } from 'react';
import FavoriteList from '../components/FavoriteList';
import { getFavoriteMovies, removeFavoriteMovie } from '../services/movieService';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavoriteMovies());
  }, []);

  const handleRemove = (id) => {
    removeFavoriteMovie(id);
    setFavorites(getFavoriteMovies());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">My Favorites</h1>
      </header>
      <div className="container mx-auto p-6">
        {favorites.length > 0 ? (
          <FavoriteList movies={favorites} onRemove={handleRemove} />
        ) : (
          <p className="text-center text-gray-600 text-xl">No favorite movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
