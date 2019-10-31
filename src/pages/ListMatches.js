import React, { Fragment } from 'react'
import ProfilesCard from '../components/ProfilesCard'
import '../style.css'
import { Container, Row } from 'react-bootstrap'
import Nav2  from '../components/Nav2'
import Footer  from '../components/Footer'
 

const allProfiles = [
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045324113034.jpg',
        pseudo:'Draculito',
        age:'19 ans',
        preferences:'#Snuff movie'
    },
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045322835216.jpg',
        pseudo:'Freddy',
        age:'33 ans',
        preferences:'#Thriller'
    },
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045324909292.jpg',
        pseudo:'Vendredi 13',
        age:'25 ans',
        preferences:'#Survival'
    },
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045324363050.jpg',
        pseudo:'Kraken',
        age:'27 ans',
        preferences:'#Survival'
    },
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045324608875.jpg',
        pseudo:'Gregorheur',
        age:'77 ans',
        preferences:'#Rape and revenge'
    },
    {
        avatar: 'https://nsa40.casimages.com/img/2019/10/23/191023045326178266.png',
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
                    <h1 className="pink_color" style={{ margin:'50px 0' }}>Les monstres qui vous correspondent</h1>
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