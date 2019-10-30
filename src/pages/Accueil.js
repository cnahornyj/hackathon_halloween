import React, { Component } from 'react';
import Content  from '../components/Content'
import '../style.css'
import Footer  from '../components/Footer'
import Nav1  from '../components/Nav1'




class Accueil extends Component {
  render() {
    return (
      <div>
        <Nav1 />
        <Content/>
        <Footer />
      </div>

    )
  }
}

export default Accueil;






