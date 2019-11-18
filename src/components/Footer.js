import React, {Component} from 'react';
import bg_footer from '../img/bg_footer.png';
import youtube from '../img/youtube.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";
import './footer.css';
import '../style.css';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const styleLink= {
            color: "#E2E0E2",
            paddingLeft: "20px"
        }

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
                                <li><Link to="/mesMonstres" style={styleLink}>MES MONSTRES</Link></li>
                                <li><Link style={styleLink}>ACTU DE L'HORREUR</Link></li>
                                <li><Link style={styleLink}>CONTACT</Link></li>
                                <li><Link style={styleLink}>MENTIONS LEGALES</Link></li>
                            </ul>
                        </div>
                    </ Container>
                </footer>
            </div>
        )
    }
}

export default Footer;
