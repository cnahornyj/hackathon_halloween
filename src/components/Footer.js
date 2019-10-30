import React, {Component} from 'react';
import bg_footer from '../img/bg_footer.png';
import youtube from '../img/youtube.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import { Container, NavLink } from 'reactstrap';
import './footer.css';
import '../style.css';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <img src={bg_footer} alt="bg-footer" className="imgInclineeFooter" />
                <footer>
                    <Container >
                        <div className="pourFlex">
                            <div className="flexReseauxSociaux">
                                <div><img src={youtube} className="cssImgIcones"/></div>
                                <div><img src={facebook} className="cssImgIcones"/></div>
                                <div><img src={instagram} className="cssImgIcones"/></div>
                                <div><img src={twitter} className="cssImgIcones"/></div>
                            </div>
                            <ul className="cssDesLiens">
                                <li><NavLink>MES MONSTRES</NavLink></li>
                                <li><NavLink>ACTU DE L'HORREUR</NavLink></li>
                                <li><NavLink>CONTACT</NavLink></li>
                                <li><NavLink>MENTIONS LEGALES</NavLink></li>
                            </ul>
                        </div>
                    </ Container>
                </footer>
            </div>
        )
    }
}

export default Footer;
