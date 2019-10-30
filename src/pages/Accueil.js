import React,{ Component} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './Accueil.css';



class Accueil extends Component {
  render(){
    return(
      <div>
        <div className = "container1">
        <h1>ADOPTE UN MONSTRE</h1>
        <p> Le premier site de rencontre pour tous les amateurs de films d'horreurs</p>
        <button> Je m'inscris </button>
        </div>

        <div className = "container2">
        <img src ="#" alt= "img1"></img>
        <img src ="#" alt= "img2"></img>
        <img src ="#" alt= "img3"></img>
        </div>

        <div className = "container3">
        <h3> Nos partenaires </h3>
        <div>
      <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>

      <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
         
        </CardImgOverlay>
      </Card>

      <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          
        </CardImgOverlay>
      </Card>
    </div>


        </div>



      </div>
    )
  }
}
   
  export default Accueil;
  
  


  
    
  