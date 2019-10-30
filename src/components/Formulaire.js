import React from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import DisplayMovies from './DisplayMovies';
import axios from "axios";

class Formulaire extends React.Component {
  constructor () {
    super();
    this.state = {
      movies: null
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
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

  render(){
  return (
    <div>

    <Form>
      <FormGroup>
        <Label for="exampleEmail">Choisissez votre avatar monstre :</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleEmail">Pseudo :</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Je suis :</legend>
        <Col sm={10}>
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
        </Col>
      </FormGroup>

      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Je recherche :</legend>
        <Col sm={10}>
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
        </Col>
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
        <Label for="exampleEmail">Mon type de films d’horreurs préféré :</Label>
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