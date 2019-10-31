import React from 'react';
import { Container, Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import DisplayMovies from '../components/DisplayMovies';
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

  getMovies() {
    // Send the request
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data.movies);
        this.setState({
          movies: data.movies[23]
        });
      });
  }

  getAvatars() {
    axios 
    .get("https://hackathon-wild-hackoween.herokuapp.com/monsters")
    .then(response => {
      const { monsters } = this.state;
      monsters.push(response.data.monsters[0])
      this.setState({ monsters : response.data.monsters });
    })
    .catch(error => console.log( error ));
  }

  listAvatars() {
    
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
              <img src={ this.state.monsters[0].picture } alt="#"></img>
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