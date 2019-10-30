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
            <nav>
                <Container>
                    <p>ADOPTE UN MONSTRE</p>
                    <button><img src={bouton} alt="bouton de connexion"/></button>
                </Container>
            </nav>
        )
    }
}

export default Nav1;
