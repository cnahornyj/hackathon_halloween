import React, {Component} from 'react';
import '../style.css';
import './nav2.css';
import { NavLink } from 'reactstrap';
import logo from '../img/logo.png';




class Nav2 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <nav className="navNav2">
                <img src={logo} className="imgLogoNav2"/>
                <ul className="ulNav2">
                    <li className="liNav2"><NavLink>MES MONSTRES</NavLink></li>
                    <li className="liNav2"><NavLink>ACTU DE L'HORREUR</NavLink></li>
                    <li className="liNav2"><NavLink>MON PROFIL</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav2;
