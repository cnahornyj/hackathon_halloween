import React from "react";
import "./App.css";
import DisplayMovies from "./components/DisplayMovies";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="App">
        {this.state.movies ? (
          <DisplayMovies movies={this.state.movies} />
        ) : (
          <p>No data yet</p>
        )}
      </div>
    );
  }
}

export default App;
