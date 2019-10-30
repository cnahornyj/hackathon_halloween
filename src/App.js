
import React,{ Component} from 'react';
import PopupMatch from './components/PopupMatch';
import Accueil from './pages/Accueil';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return(
      <div>
        <PopupMatch/>
        <Accueil/>
      </div>
    )
  }
}

export default App;


