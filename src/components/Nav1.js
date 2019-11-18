import React, {Component} from 'react';
import './nav1.css';
import '../style.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";


class Nav1 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <nav className="navNav1">
                <div className="flexNav1">
                    <Link exact to="/"><img src={logo} className="imgLogoNav1"/></Link>
                    <Link to="/"><button className="buttonNav1">CONNEXION</button></Link>
                </div>
            </nav>
        )
    }
}

export default Nav1;
