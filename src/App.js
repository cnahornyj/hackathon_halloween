
import React,{ Component} from 'react';
import Accueil from './pages/Accueil';
import Footer from './components/Footer';

class App extends Component {
   

  render(){
    return(
      <div>
        <PopupMatch/>
        <Accueil/>
        <Footer />
      </div>
    )
  }
}

export default App;


