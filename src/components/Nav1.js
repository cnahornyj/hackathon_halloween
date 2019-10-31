import React, {Component} from 'react';
import './nav1.css';
import '../style.css';
import logo from '../img/logo.png';



class Nav1 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <nav className="navNav1">
                <div className="flexNav1">
                    <img src={logo} className="imgLogoNav1"/>
                    <button className="buttonNav1">CONNEXION</button>
                </div>
            </nav>
        )
    }
}

export default Nav1;
