import React from 'react';
import { Fragment } from 'react';
import '../style.css'
import { Col } from 'reactstrap';
import '../components/Formulaire.css'


function DisplayAvatars({ monsters }){
    return (
        monsters.map((monster, index) => (
            <Fragment key={index}>
                <img src={ monster.picture } alt="#"></img>
            </Fragment >   
        ))
    );
};

export default DisplayAvatars;