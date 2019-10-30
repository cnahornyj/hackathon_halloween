import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Content.css';



class Accueil extends Component {
  render() {
    return (
      <div>
        
        <Container className="header">
          <h1>ADOPTE UN MONSTRE</h1>
          <p> Le premier site de rencontre pour tous les amateurs de films d'horreurs</p>
          <button> Je m'inscris </button>
          </Container>

        <Container className="image">
          <img src="#" alt="img1"></img>
          <img src="#" alt="img2"></img>
          <img src="#" alt="img3"></img>
          </Container>

        <Container className="part">
          <h3> Nos partenaires </h3>
       
            <Card inverse>
              <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>

            <Card inverse>
              <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

              </CardImgOverlay>
            </Card>

            <Card inverse>
              <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

              </CardImgOverlay>
            </Card>
            </Container>
      
        
    
    <Container>
      <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
      </Container>


<Container className="gallery">

			<img  src="" alt=""></img>
			<img src="" alt=""></img>
			<img src="" alt=""></img>
			<img src="" alt=""></img>
			<img src="" alt=""></img>
      </Container>


</div>
    )
    }
}

export default Accueil;






