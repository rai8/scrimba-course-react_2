import React, { Component } from "react";

export default class Form_practice extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      dietaryRestriction: []
    };
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="First Name" />
          <br />
          <input placeholder="Last Name" />
          <br />
          <input placeholder="Age" />
          <br />
          <button>Sumbit</button>
        </form>
        <hr />
        <h2>Entered information :</h2>
        <p>Your Name: </p>
        <p>Your Gender: </p>
        <p>Your Age: </p>
        <p>Your Destination: </p>
        <p>Your Dietary restrictions: </p>
      </div>
    );
  }
}
