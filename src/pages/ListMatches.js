import React, { Fragment } from 'react'
import ProfilesCard from '../components/ProfilesCard'
import '../style.css'
import { Container, Row } from 'react-bootstrap'
import Nav2  from '../components/Nav2'
import Footer  from '../components/Footer'
 

const allProfiles = [
    {
        avatar: '',
        pseudo:'Draculito',
        age:'19 ans',
        preferences:'#Snuff movie'
    },
    {
        avatar: '',
        pseudo:'Freddy',
        age:'33 ans',
        preferences:'#Thriller'
    },
    {
        avatar: '',
        pseudo:'Vendredi 13',
        age:'25 ans',
        preferences:'#Survival'
    },
    {
        avatar: '',
        pseudo:'Kraken',
        age:'27 ans',
        preferences:'#Survival'
    },
    {
        avatar: '',
        pseudo:'Gregorheur',
        age:'77 ans',
        preferences:'#Rape and revenge'
    },
    {
        avatar: '',
        pseudo:'Ursula',
        age:'29 ans',
        preferences:'#Snuff movie'
    }
];

function ListMatches() {
    return (
        <div>
            <Nav2 />
            <Fragment>
                <Container className="list-matches">
                    <h1 className="pink_color" style={{ marginBottom:'50px' }}>Les monstres qui vous correspondent</h1>
                    <Row>
                        {allProfiles.map(item => <ProfilesCard {...item}/>)} 
                    </Row>
                </Container>
            </Fragment>
            <Footer />
        </div>
    );
  }

export default ListMatches 