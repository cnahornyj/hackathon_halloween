import React from 'react';
import '../components/DisplayMovies.css'
import '../style.css'
import { Container, Button, Row } from 'react-bootstrap'

function DisplayMovies({ movies }){
    return(
        <div className="DisplayMovies">
            <Container>
            <h2>Cinéphiles de l’horreur faites vos jeux</h2>
            <div className="grey_background" style={{ padding:"20px", marginBottom:"30px"}}>
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
            <Button type="submit">
                Envoyez
            </Button>
            </Container>
        </div>
    );
};

export default DisplayMovies;