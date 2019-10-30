import React from 'react';
import './PopupMatch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import { IoMdHeart } from "react-icons/io";
import { Card, Row, Col } from 'react-bootstrap';


class PopupMatch extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}><IoMdHeart/></button>
          <ReactModal  
             isOpen={this.state.showModal} 
          >
            <p class="match">It's a Monster Match!</p>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                  <Card.Img variant="top" class="img" src="https://i.frg.im/u4tvA62n/bmatb72535_600.jpg?v=1528286304.147" />
                  <Card.Title>Psedo</Card.Title>
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                  <Card.Img variant="top" class="img" src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14199781_580940452107770_8225117799363717883_n.jpg?_nc_cat=100&_nc_oc=AQmDRUZuMw5_7L18PNfjyZIdBI9yKy2Qkq52QjIEGneoWL6LUgDzp30mJpkdhOtMJAE&_nc_ht=scontent-cdt1-1.xx&oh=9b6f420dc14fa46b1e02bd7a7144ef04&oe=5E5AB344" />
                  <Card.Title>Psedo</Card.Title>          
              </Col>
            </Row>
              <h2 style={{ textAlign: "center" }}>Choisie ton lieux de rencontre</h2>
            <Row>
              <Col >
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" class="imglieu" src="https://www.jeuxetcompagnie.fr/wp-content/uploads/2018/10/faire-un-cimeti%C3%A8re-pour-halloween.jpg" />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>cimetière</Card.Title>
                    <Card.Text>
                      <p>Age: 29 ans</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" class="imglieu" src="https://i0.wp.com/www.slasherstudios.com/wp-content/uploads/2012/03/pieces.jpg"  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>scene de crime</Card.Title>
                    <Card.Text>
                      <p>Age: 29 ans</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" class="imglieu" src="https://cdn.homesthetics.net/wp-content/uploads/2017/09/f67e7384583e32609b655f8e911f8f17.jpg" />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>morgue</Card.Title>
                    <Card.Text>
                      <p>Age: 29 ans</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" class="imglieu" src="https://www.yves.brette.biz/public/humour/vegetarien_gore_abattoir________________.jpg" />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>abatoire</Card.Title>
                    <Card.Text>
                      <p>Age: 29 ans</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> 

            <button onClick={this.handleCloseModal} class="button">Continue</button>
          </ReactModal>
        </div>
      );
    }
  }
   
export default PopupMatch;