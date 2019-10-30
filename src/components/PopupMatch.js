import React from 'react';
import './PopupMatch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import { IoMdHeart } from "react-icons/io";
import { Card } from 'react-bootstrap';


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
            <p class="match">It's a Match!</p>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/image-principale-919b9d.png" />
                <Card.Body>
                  <Card.Title>Psedo</Card.Title>
                  <Card.Text>
                    Psedo: 
                    Age:
                    Sex: 
                    Film préféré:
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.fc-photos.com/wp-content/uploads/2016/09/fc-photos-Weynacht-0001.jpg" />
                <Card.Body>
                  <Card.Title>Psedo</Card.Title>
                  <Card.Text>
                    Age:
                    Sex: 
                    Film préféré:
                  </Card.Text>
                </Card.Body>
              </Card>
              <h2>Choisie ton lieux de rencontre</h2>
            <button onClick={this.handleCloseModal} class="button">Continue</button>
          </ReactModal>
        </div>
      );
    }
  }
   
export default PopupMatch;