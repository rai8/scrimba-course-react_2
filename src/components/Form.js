import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.state({ [name]: value });
  }
  render() {
    return (
      <div>
        <h1>fill the form below</h1>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="checkbox"
              name="isFriendly"
              onChange={this.handleChange}
            />
            Is Friendly ?
          </label>
          <p>
            {this.state.firstName} {this.state.lastName}{" "}
          </p>
        </form>
      </div>
    );
  }
}
