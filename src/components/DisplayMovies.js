import React from 'react';
import '../components/DisplayMovies.css'
import '../style.css'
import { Container, Button, Row } from 'react-bootstrap'

function DisplayMovies({ movies }){
    return(
        movies.map((movie, index) => (
            <div key={index} className="bock-movies">
             <div className="movies_picture">
                    <img src={ movies.posterUrl } alt="poster"/>
                    <button className="like_movies"></button>
                </div>
            <div className="infos_movies">
                <h3>{movies.title}</h3>
                <p>Réalisateur : {movies.director}</p>
                <p>Date de sortie : {movies.year}</p>
            </div>
            </div>    
        ))
    );
};

export default DisplayMovies;