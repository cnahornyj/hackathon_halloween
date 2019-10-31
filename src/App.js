import React,{ Component} from 'react';
import Accueil from './pages/Accueil';
import Formulaire from "./pages/Formulaire";
import ListMatches from "./pages/ListMatches";
import {BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Accueil}></Route>
            <Route path="/formulaireDeConnexion" component={Formulaire}></Route>
            <Route path="/mesMonstres" component={ListMatches}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;


