import React from 'react';
import './Formulaire.css';
import { Form, FormGroup, Label, Input, Col,Container } from 'reactstrap';
import DisplayMovies from '../components/DisplayMovies';
import axios from "axios";
import Nav2  from '../components/Nav2'


class Formulaire extends React.Component {
  constructor () {
    super();
    this.state = {
      movies: null,
    };
    this.getMovies = this.getMovies.bind(this); 
  }

  componentDidMount() {
    this.getMovies();
  }


  getRandomInt =(max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  listFilm = (data) => {
  const board = [];  
  for (let i = 0; i < 8; i++){
    board.push(data.movies[i])
  } 
  return board 
}

  getMovies() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({ 
          movies: this.listFilm(data),
        });
      });
  }


  render(){
  return (
    <div>
      <Nav2 />

      <Form> 
      <Container>
        <h1>créez votre compte</h1>
        <FormGroup>
          <Label for="exampleEmail">Choisissez mon monsters avatar :</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Container>

      <Container style={{ marginRight: "10px"}} >
        <Col>
          <FormGroup>
            <Label for="exampleEmail">Pseudo :</Label>
            <Input type="textarea" name="text" id="exampleText" style={{ borderRadius: "40px", width: "700px" }}/>
          </FormGroup>
        </Col> 

        <Col style={{ display: "" }}>
        <FormGroup tag="fieldset">
          <legend className="col-form-label col-sm-2">Je suis :</legend>
            <FormGroup check >
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Un homme
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Une femme
              </Label>
            </FormGroup>
        </FormGroup>  
        </Col>
    
        <Col>
        <FormGroup tag="fieldset" >
          <legend className="col-form-label col-sm-2">Je recherche :</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Un homme
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Une femme
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Les deux
              </Label>
            </FormGroup>
        </FormGroup>
        </Col>

        <Col>
        <FormGroup>
          <Label for="exampleEmail">Mon âge :</Label>
          <Input type="select" name="select" id="exampleSelect" style={{ borderRadius: "40px",  width: "700px" }}>
          <option>Entre 18 et 29 ans</option>
          <option>Entre 30 et 44 ans</option>
          <option>Entre 45 et 59 ans</option>
          <option>Entre 60 et 74 ans</option>
          <option>75 ans et (+)</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Mon type de films d’horreurs préféré :</Label>
          <Input type="select" name="select" id="exampleSelect" style={{ borderRadius: "40px",  width: "700px" }}>
          <option>Bogeyman</option>
          <option>Comédie horrifique</option>
          <option>Epouvante</option>
          <option>Fantastique</option>
          <option>Final girl</option>
          <option>Found footage</option>
          <option>Gore</option>
          <option>Jump scare</option>
          <option>Scream queen</option>
          <option>Slasher</option>
          <option>Snuff movie</option>
          <option>Survival</option>
          <option>Thriller</option>
          <option>Zombie</option>
          </Input>
        </FormGroup>
        </Col>
      </Container>
    </Form>

      {this.state.movies ? (
            <DisplayMovies movies={this.state.movies} />
          ) : (
            <p>No data yet</p>
          )}
    </div>


    );
  }
}


export default Formulaire;