
export const getMoviesByType = async (type) => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data[type];
};

export const getMovieById = async (id) => {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    const movies = Object.values(data).flat(); // Combine all movie arrays into one
    const movie = movies.find(movie => movie.id === id);
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null; // Return null if there's an error
  }
};

  
  
  let favoriteMovies = [];

  export const getFavoriteMovies = () => {
    return favoriteMovies;
  };
  
  // export const addFavoriteMovie = (movie) => {
  //   if (!favoriteMovies.find(fav => fav.id === movie.id)) {
  //     favoriteMovies.push(movie);
  //   }
  // };
  export const addFavoriteMovie = (movie) => {
    const movieExists = favoriteMovies.find(fav => fav.id === movie.id);
    if (movieExists) {
      return { success: false, message: 'Movie already in favorites' };
    }
    favoriteMovies.push(movie);
    return { success: true, message: 'Added to favorites!' };
  };
  
  
  export const removeFavoriteMovie = (id) => {
    favoriteMovies = favoriteMovies.filter(movie => movie.id !== id);
  };
  
  export const getAllMovies = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const movies = Object.values(data).flat(); // Combine all movie arrays into one
      return movies;
    } catch (error) {
      console.error('Error fetching all movies:', error);
      return [];
    }
  };
  