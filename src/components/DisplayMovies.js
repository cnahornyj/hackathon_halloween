import React from 'react';
import '../components/DisplayMovies.css'
import '../style.css'

function DisplayMovies({ movies }){
    return(
        movies.map((movie, index) => (
            <div key={index} className="block-movies">
             <div className="movies_picture">
                    <img src={ movie.posterUrl } alt="poster"/>
                    <button className="like_movies"></button>
                </div>
            <div className="infos_movies">
                <h3>{movie.title}</h3>
                <p>Réalisateur : {movie.director}</p>
                <p>Date de sortie : {movie.year}</p>
            </div>
            </div>    
        ))
    );
};

export default DisplayMovies;