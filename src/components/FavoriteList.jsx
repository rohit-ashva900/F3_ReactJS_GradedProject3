
// import React from 'react';

// const FavoriteList = ({ movies, onRemove }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {movies.map(movie => (
//         <div key={movie.id} className="bg-white rounded shadow p-4 m-2 w-60">
//           <img src={movie.posterurl} alt={movie.title} className="w-full h-auto" />
//           <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
//           <button className="btn mt-2" onClick={() => onRemove(movie.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FavoriteList;
import React from 'react';

const FavoriteList = ({ movies, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <div key={movie.id} className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img src={movie.posterurl} alt={movie.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-700">{movie.year}</p>
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1 text-sm"
              onClick={() => onRemove(movie.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
