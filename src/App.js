import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="text-lg">Home</Link>
        <Link to="/favorites" className="text-lg">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

