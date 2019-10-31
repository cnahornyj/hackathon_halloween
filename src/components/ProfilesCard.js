import React, { Component, Fragment } from 'react'
import '../style.css'
import './ProfilesCard.css'
import { Col, Card, Button } from 'react-bootstrap'
import PopupMatch from '../components/PopupMatch'

class ProfilesCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false
        }
    }

    handleClick = () => {
        console.log(this.state.openModal)
        this.setState({openModal: true})
    }

    resetOpenModal = () => {
        this.setState({openModal: false})
    }

    
    render() {
        const { avatar, pseudo, age, preferences } = this.props
        return (
            <Fragment>
                <Col sm={4} >
                    <Card className="green_shadow block">
                        <Card.Img variant="top" src={ avatar } />
                        <Card.Body style={{ textAlign: 'center' }}className="grey_background">
                            <Card.Title className="pseudo">{ pseudo }</Card.Title>
                            <p>{ age }</p>
                            <p>{ preferences }</p>
                            <div className="buttons_matches">
                                <Button className="pink_background no"></Button>
                                <Button className="green_background yes" onClick={this.handleClick}></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            {this.state.openModal && <PopupMatch resetOpenModal={this.resetOpenModal} />}
            </Fragment>
        );
    }
}

export default ProfilesCard 