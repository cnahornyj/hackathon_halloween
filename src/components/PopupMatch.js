import React from 'react';
import './PopupMatch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import { Card, Row, Col, Container } from 'react-bootstrap';
import '../style.css';
import love_skull from '../img/love_skull.png'

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
          <button onClick={this.handleOpenModal}>toto</button>
          
          <ReactModal 
             style={{content: {backgroundColor: '#1C051C' }}}
             isOpen={this.state.showModal} 
          >

          <Container> 
            <h1 className="match">It's a Monster Match!</h1>
            <Row style={{ alignItems: "center" }}>
              <Col sm={4} style={{ textAlign:"center" }}>
                <Card.Img variant="top" class="img" src="https://i.frg.im/u4tvA62n/bmatb72535_600.jpg?v=1528286304.147" />
                <Card.Title style={{ color:"#E54C84", fontFamily: 'jmh_horrorhorror', fontSize: "2em" }}>Psedo</Card.Title>
              </Col>
              <Col sm={4} style={{ textAlign:"center" }}> 
                <Card.Img variant="top" style={{ width: "200px", height: "200px" }} src={love_skull} />
              </Col>
              <Col sm={4} style={{ textAlign:"center" }}>
                <Card.Img variant="top" class="img" src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/14199781_580940452107770_8225117799363717883_n.jpg?_nc_cat=100&_nc_oc=AQmDRUZuMw5_7L18PNfjyZIdBI9yKy2Qkq52QjIEGneoWL6LUgDzp30mJpkdhOtMJAE&_nc_ht=scontent-cdt1-1.xx&oh=9b6f420dc14fa46b1e02bd7a7144ef04&oe=5E5AB344" />
                <Card.Title style={{ color:"#E54C84", fontFamily: 'jmh_horrorhorror', fontSize: "2em"  }}>Psedo</Card.Title>          
              </Col>
            </Row>
         </Container> 
              <h2 style={{ textAlign: "center", color: "#6BF8AC", fontFamily: 'jmh_horrorhorror', fontSize: "3em", margin: "100px 0px 60px 0px" }}>Choisie ton lieux de rencontre</h2>
            <Row>
              <Col sm={3} style={{ textAlign:"center" }}>                
              <Card.Img variant="top" class="imglieu" src="https://www.jeuxetcompagnie.fr/wp-content/uploads/2018/10/faire-un-cimeti%C3%A8re-pour-halloween.jpg" />
                <Card.Title style={{ fontFamily: 'jmh_horrorhorror', fontSize: "2em", color: "white"   }}>Cimetière</Card.Title>
              </Col>
              <Col sm={3} style={{ textAlign:"center" }}>               
                <Card.Img variant="top" class="imglieu" src="https://i0.wp.com/www.slasherstudios.com/wp-content/uploads/2012/03/pieces.jpg"  />
                <Card.Title style={{ fontFamily: 'jmh_horrorhorror', fontSize: "2em", color: "white"   }}>Scene de crime</Card.Title>
              </Col>
              <Col sm={3} style={{ textAlign:"center" }}>                 
                <Card.Img variant="top" class="imglieu" src="https://cdn.homesthetics.net/wp-content/uploads/2017/09/f67e7384583e32609b655f8e911f8f17.jpg" />
                <Card.Title style={{ fontFamily: 'jmh_horrorhorror', fontSize: "2em", color: "white"   }}>Morgue</Card.Title>
              </Col>
              <Col sm={3} style={{ textAlign:"center" }}>                
                <Card.Img variant="top" class="imglieu" src="https://www.yves.brette.biz/public/humour/vegetarien_gore_abattoir________________.jpg" />
                <Card.Title style={{ fontFamily: 'jmh_horrorhorror', fontSize: "2em", color: "white"  }}>Abatoire</Card.Title>
              </Col>
            </Row>
            <Col sm={12} style={{ textAlign:"center" }}>
               <button onClick={this.handleCloseModal} style={{ margin: "80px", backgroundColor: "#E54C84" }}>Continue</button> 
            </Col> 
          </ReactModal>
     
        </div>
      );
    }
  }
   
export default PopupMatch;