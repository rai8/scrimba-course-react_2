import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>fill the form below</h1>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <p>
            {this.state.firstName} {this.state.lastName}{" "}
          </p>
        </form>
      </div>
    );
  }
}
