import React, { Component } from "react";

//fetch method allows us perfom http request so that we can get any data we want
//read on promises
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    const text = this.state.loading
      ? "loading... kindly wait"
      : this.state.character.name;
    return (
      <div>
        <h1> Hello world</h1>
        <p>{text}</p>
      </div>
    );
  }
}
export default App;
