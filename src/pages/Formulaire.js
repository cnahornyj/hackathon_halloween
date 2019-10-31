import React from 'react';
import { Container, Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import DisplayMovies from '../components/DisplayMovies';
import DisplayAvatars from '../components/DisplayAvatars';
import axios from "axios";
import Nav2  from '../components/Nav2'
import '../components/Formulaire.css'


class Formulaire extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: null,
      monsters : [0]
    };

      this.getMovies = this.getMovies.bind(this);
      this.getAvatars = this.getAvatars.bind(this);
  }

  componentDidMount() {
    this.getMovies();
    this.getAvatars();
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

  getAvatars() {
    axios 
    .get("https://hackathon-wild-hackoween.herokuapp.com/monsters")
    .then(response => response.data)
      .then(data => {
        this.setState({ 
          monsters: this.listAvatars(data),
        });
      });
  }

  listAvatars = (data) => {
    const boardAvatars = [];  
    for (let i = 0; i < 8; i++){
      boardAvatars.push(data.monsters[i])
    } 
    return boardAvatars 
  }

  render(){
  return (
    <div>
      <Nav2 />
      <div  className="formulaire">
      <Container>
        <h1 className="color_green">Créez votre compte</h1>
        <Form>
          <Row>
            <Col sm={6}>
            <FormGroup>
              <Label for="exampleEmail">Choisissez votre avatar monstre :</Label>
              <div className="block-avatars">
                  {this.state.movies ? (
                <DisplayAvatars monsters={this.state.monsters} />
              ) : (
                <p>No data yet</p>
              )}
              </div>
            </FormGroup>
            </Col>
            <Col sm={6}>
          <FormGroup>
            <Label for="exampleEmail">Pseudo :</Label>
            <Input type="text" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup tag="fieldset">

            <legend className="col-form-label">Je suis :</legend>
          <Row>
            <Col xs={6}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                  Un homme
                </Label>
              </FormGroup>
              </Col>
              <Col xs={6}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                  Une femme
                </Label>
              </FormGroup>
            </Col>
            </Row>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend className="col-form-label">Je recherche :</legend>
            <Row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                  Un homme
                </Label>
              </FormGroup>
              </Col>
              <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                  Une femme
                </Label>
              </FormGroup>
              </Col>
              <Col>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                  Les deux
                </Label>
              </FormGroup>
            </Col>
            </Row>

          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Mon âge :</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>Entre 18 et 29 ans</option>
            <option>Entre 30 et 44 ans</option>
            <option>Entre 45 et 59 ans</option>
            <option>Entre 60 et 74 ans</option>
            <option>75 ans et (+)</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Mon type de film d’horreur préféré :</Label>
            <Input type="select" name="select" id="exampleSelect">
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
          <FormGroup>
            <Label>Ma description</Label>
            <Input type="textarea" />
          </FormGroup>
          </Col>
          </Row>
        </Form>
      </Container>
      </div>
      {this.state.movies ? (
            <DisplayMovies movies={this.state.movies} />
          ) : (
            <p>No data yet</p>
          )}
    </div>


    );
  }
}


export default Formulaire