import React, {Component} from 'react';
import bg_footer from '../img/bg_footer.png';
import { Container } from 'reactstrap';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <footer>
                <Container >
                    <img src={bg_footer} alt="bg-footer" />
                    <div>
                        <div>icones réseaux sociaux</div>
                        <div>
                            <p>Mes monstres</p>
                            <p>Actu de l'horreur</p>
                            <p>Contact</p>
                            <p>Mentions légales</p>
                        </div>
                    </div>
                </ Container>
            </footer>
            
        )
    }
}

export default Footer;
