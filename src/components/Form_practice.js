import React, { Component } from "react";

export default class Form_practice extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestriction: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    //pulling elements from event.target
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          <button>Sumbit</button>
        </form>
        <hr />
        <h2>Entered information :</h2>
        <p>
          Your Name: {this.state.firstName} {this.state.lastName}{" "}
        </p>
        <p>Your Gender: </p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Destination: </p>
        <p>Your Dietary restrictions: </p>
      </div>
    );
  }
}
