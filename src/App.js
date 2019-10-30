import React,{ Component} from 'react';
import Accueil from './pages/Accueil';
import Footer from './components/Footer';
import ListMatches from './pages/ListMatches';

class App extends Component {
  render(){
    return(
      <div>
        <Accueil/>
        <Footer />
      </div>
    )
  }
}

export default App;


