// // src/components/SearchBar.js
// import React from 'react';

// const SearchBar = (props) => {
//   const { searchTerm, onSearch, sortBy, onSortByChange, minRating, onMinRatingChange } = props;

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by movie title..."
//         value={searchTerm}
//         onChange={(e) => onSearch(e.target.value)}
//       />
//       <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
//         <option value="popularity.desc">Popularity Descending</option>
//         <option value="popularity.asc">Popularity Ascending</option>
//         <option value="release_date.desc">Release Date Descending</option>
//         <option value="release_date.asc">Release Date Ascending</option>
//         <option value="vote_average.desc">Rating Descending</option>
//         <option value="vote_average.asc">Rating Ascending</option>
//       </select>
//       <input
//         type="number"
//         placeholder="Minimum Rating"
//         value={minRating}
//         onChange={(e) => onMinRatingChange(e.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchBar;


// src/components/SearchBar.js
import React, { useState } from 'react';
import "./index.css"

const SearchBar = ({ handleSearch, props }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className='btn'>Search</button>
    </form>
  );
};

export default SearchBar;
