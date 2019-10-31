import React from 'react';

function DisplayMovies({movies}){
    return(
        movies.map((movie, index) => (
            <div key={index} className="DisplayMovies">
                <img src={movie.posterUrl} alt="poster"/>
                <h1>{movie.title}</h1>
                <h2>{movie.director}</h2>
                <h3>{movie.year}</h3>
                <p>{movie.country}</p>
            </div>
        ))
    );
};

export default DisplayMovies;