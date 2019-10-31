import React from 'react';
import '../components/DisplayMovies.css'
import '../style.css'

function DisplayMovies({ movies }) {
    return (
        <div className="movie-container">
            {
                movies.map((movie, index) => (
                    <div key={index} className="bock-movies">
                        <div className="movies_picture">
                            <img src={movie.posterUrl} alt="poster" />
                        </div>
                        <div className="infos_movies">
                            <h3>{movie.title}</h3>
                            <p>Par {movie.director}</p>
                            <p>Date de sortie : {movie.year}</p>
                            <button className="like_movies"></button>
                        </div>
                    </div>
                ))
            }
        </div> // Choses à terminer chouchou centrer les coeurs en dessous des films j'ai joué sur la marge gauche pour pseudo centrer les films responsivement ce serait bancable mais en full écran ça fonctionne à tester sur les autres //
    );
};

export default DisplayMovies;