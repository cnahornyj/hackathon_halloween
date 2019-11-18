import React,{ Component} from 'react';
import Accueil from './pages/Accueil';
import Formulaire from "./pages/Formulaire";
import ListMatches from "./pages/ListMatches";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


class App extends Component {
  render(){
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Accueil}></Route>
            <Route path="/formulaireDeConnexion" component={Formulaire}></Route>
            <Route path="/mesMonstres" component={ListMatches}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;

