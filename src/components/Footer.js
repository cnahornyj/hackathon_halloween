import React, {Component} from 'react';
import bg_footer from '../images/bg_footer.png';


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <footer>
                <img src={bg-footer} alt="bg-footer" />
                <div>
                    <div>icones réseaux sociaux</div>
                    <div>
                        <p>Mes monstres</p>
                        <p>Actu de l'horreur</p>
                        <p>Contact</p>
                        <p>Mentions légales</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
