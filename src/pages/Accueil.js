import React, { Component } from 'react';
import Content  from '../components/Content'
import Footer  from '../components/Footer'
import Nav1  from '../components/Nav1'
import Nav2  from '../components/Nav2'




class Accueil extends Component {
  render() {
    return (
      <div>
        <Nav2 />
        <Nav1 />
        <Content/>
        <Footer />
      </div>

    )
  }
}

export default Accueil;






