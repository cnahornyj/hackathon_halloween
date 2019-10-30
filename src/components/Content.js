import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';
import '../style.css';
import picto_trouvez from '../img/picto_trouvez.png'
import picto_rencontrez from '../img/picto_rencontrez.png'
import picto_suivez from '../img/picto_suivez.png'


class Accueil extends Component {
  render() {
    return (
      <div className="content">

        <Container className="header">
        <Col sm={4}>
          <h1>ADOPTE UN MONSTRE</h1>
          <p> Le premier site de rencontre pour tous les amateurs de films d'horreurs</p>
          <button> Je m'inscris </button>
          </Col>
        </Container>



        <Container className="suivre">
        <Row>
        <Col sm={4}>
        <Card>
            
            <CardBody className="image">
            <CardImg className ="img1"  src={picto_suivez}alt="" />
              <h3>Suivez</h3>
              <CardText>L'actualité des meilleurs films d'horreurs</CardText>
            </CardBody>
          </Card>
          </Col>

          <Col sm={4}>
          <Card>
            <CardBody className="image">
            <CardImg className ="img2" src = {picto_trouvez}alt="" />
              <h3>Trouver</h3>
              <CardText>L'actualité des meilleurs films d'horreurs</CardText>
            </CardBody>
          </Card>
          </Col>

          <Col sm={4}>
          <Card>
            <CardBody className="image">
            <CardImg className ="img3" src = {picto_rencontrez}alt="" />
              <h3>Rencontrez </h3>
              <CardText>Les monstres dans des lieux insolites</CardText>
            </CardBody>
          </Card>
          </Col>

         
        </Row>
        </Container>

          
      <Container className="partenaires">
      <h4> Nos partenaires</h4>
        <div className = "movie">
          <img src="https://zupimages.net/up/19/44/ecah.jpg" alt="netflix"></img>
          <img src="https://c7.uihere.com/files/369/573/203/pathe-cordeliers-pathe-vaise-pathe-bellecour-cinema-digest-thumb.jpg" alt="pathe"></img>
          <img src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Gaumont_1995.svg" alt="gaumont"></img>
          </div>
        </Container>


      </div>
    )
  }
}

export default Accueil;






