import React, {Component} from 'react';
import { Container } from 'reactstrap';
import bouton from '../img/bouton.png';

class Nav1 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Container>
                <p>ADOPTE UN MONSTRE</p>
                <button><img src={bouton} alt="bouton de connexion"/></button>
            </Container>
        )
    }
}

export default Nav1;
