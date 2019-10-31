import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';
import '../style.css';
import picto_trouvez from '../img/picto_trouvez.png';
import picto_rencontrez from '../img/picto_rencontrez.png';
import picto_suivez from '../img/picto_suivez.png';
import { Link } from "react-router-dom";



class Accueil extends Component {
  render() {
    return (
      <div  >
        <Container className="header"  >
        <Col sm={4}>
          <h1>ADOPTE UN MONSTRE</h1>
          <p> Le premier site de rencontre pour tous les amateurs de films d'horreurs</p>
          
          <Link to="/formulaireDeConnexion"><button> Je m'inscris </button></Link>
          </Col>
        </Container>


        <Container className="suivre">
        <Row>
        <Col sm={4}>
        <Card>
            
            <CardBody className="image">
            <div className = "circle">
            <CardImg className ="img1"  src={picto_suivez}alt="" />
            </div>
              <h3>Suivez</h3>
              <CardText>L'actualité des meilleurs films d'horreurs</CardText>
            </CardBody>
          </Card>
          </Col>

          <Col sm={4}>
          <Card>
            <CardBody className="image">
              <div className = "circle">
            <CardImg className ="img2" src = {picto_trouvez}alt="" />
            </div>
              <h3>Trouver</h3>
              <CardText>L'actualité des meilleurs films d'horreurs</CardText>
            </CardBody>
          </Card>
          </Col>

          <Col sm={4}>
          <Card>
            <CardBody className="image">
            <div className = "circle">
            <CardImg className ="img3" src = {picto_rencontrez}alt="" />
            </div>
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
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" alt="netflix"></img>
          <img src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Gaumont_1995.svg" alt="gaumont"></img>
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Path%C3%A9_Logo.svg/1280px-Path%C3%A9_Logo.svg.png" alt="pathe"></img>
          <img src="https://files.slack.com/files-pri/T6SG2QGG2-FQ1JDMU4F/la-nuit-de-l_horreur.png" alt="pathe"></img>
          </div>
        </Container>


      </div>
    )
  }
}

export default Accueil;






