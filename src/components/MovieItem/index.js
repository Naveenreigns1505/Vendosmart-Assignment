import React from 'react';
import "./index.css"

const MovieItem = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
    return (
        <div className="movie-item">
            <img src={posterUrl} alt={movie.title} />
            <div className='movie-details'>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieItem;
