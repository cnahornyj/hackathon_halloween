import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';
import '../style.css';
import picto_trouvez from '../img/picto_trouvez.png'
import bg_footer2 from '../img/bg_footer2.png'
import picto_rencontrez from '../img/picto_rencontrez.png';
import picto_suivez from '../img/picto_suivez.png';
import { Link } from "react-router-dom";



class Accueil extends Component {
  render() {
    return (
      <div className="content">

     <div className="accueil">
        <Container className="header">
        <Col sm={4}>
          <h1>ADOPTE UN MONSTRE</h1>
          <p> Le premier site de rencontre pour tous les amateurs de films d'horreurs</p>
          <Link to="/formulaireDeConnexion"><button> Je m'inscris </button></Link>
          </Col>
        </Container>
        </div>

        <Col sm={4}>
        <div>
        <img className="bg_footer" src= {bg_footer2}></img>
        </div>
        </Col>

        
        <div className="accueil2">
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
              <CardText>L'âme soeur en quelques heures</CardText>
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
        </div>

      <div className= "fond_blanc">
      <Container className="partenaires">
      <h4> Nos partenaires</h4>
        <div className = "movie">
          <img className="img_movie" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" alt="netflix"></img>
          <img className="img_movie" src="https://upload.wikimedia.org/wikipedia/fr/1/1f/Gaumont_1995.svg" alt="gaumont"></img>
          <img className="img_movie" src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Path%C3%A9_Logo.svg/1280px-Path%C3%A9_Logo.svg.png" alt="pathe"></img>
          <img className="img_movie" src="https://files.slack.com/files-pri/T6SG2QGG2-FQ1JDMU4F/la-nuit-de-l_horreur.png" alt="pathe"></img>
          </div>
        </Container>
        </div>
      </div>
    )
  }
}

export default Accueil;






