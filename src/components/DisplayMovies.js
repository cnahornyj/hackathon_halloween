import React from 'react';

function DisplayMovies({movies}){
    return(
        <div className="DisplayMovies">
            <img src={movies.posterUrl} alt="poster"/>
            <h1>{movies.title}</h1>
            <h2>{movies.director}</h2>
            <h3>{movies.year}</h3>
            <p>{movies.country}</p>
        </div>
    );
};

export default DisplayMovies;