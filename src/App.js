import React,{ Component} from 'react';
import Accueil from './pages/Accueil';
import Formulaire from "./pages/Formulaire";
import ListMatches from "./pages/ListMatches";
import {BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {
  render(){
    return(
      <div>
        <ListMatches/>
      </div>
    )
  }
}

export default App;


