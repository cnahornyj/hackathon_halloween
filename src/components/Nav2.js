import React, {Component} from 'react';
import '../style.css';
import './nav2.css';
import { NavLink } from 'reactstrap';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";





class Nav2 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        const styleLink= {
            color: "#E2E0E2",
            textDecoration: "none",
        }

        return(
            <nav className="navNav2">
                <Link exact to="/"><img src={logo} className="imgLogoNav2"/></Link>
                <ul className="ulNav2">
                    <li className="liNav2"><Link to="/mesMonstres" style={styleLink}>MES MONSTRES</Link></li>
                    <li className="liNav2"><Link style={styleLink}>ACTU DE L'HORREUR</Link></li>
                    <li className="liNav2"><Link style={styleLink}>MON PROFIL</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav2;
