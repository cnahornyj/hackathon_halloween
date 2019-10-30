import React, {Component} from 'react';
import bouton from '../img/bouton.png';
import './nav1.css';
import '../style.css';



class Nav1 extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <nav>
                <div className="flexNav1">
                    <p className="pourAbsoluteP">ADOPTE UN MONSTRE</p>
                    <button className="buttonNav1">CONNEXION</button>
                </div>
            </nav>
        )
    }
}

export default Nav1;
