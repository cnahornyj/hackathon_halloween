import React,{ Component} from 'react';
import PopupMatch from './components/PopupMatch';
import Accueil from './pages/Accueil';
import Formulaire from "./components/Formulaire";

class App extends Component {
  render(){
    return(
      <div>
        <PopupMatch/>
        <Accueil/>
        <Formulaire />
      </div>
    )
  }
}

export default App;


