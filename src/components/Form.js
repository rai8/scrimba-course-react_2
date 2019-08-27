import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
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
              checked={this.state.isFriendly}
            />
            Is Friendly ?
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={this.state.gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={this.state.gender === "female"}
            />
            Female
          </label>{" "}
          <br />
          <p>
            Select your favorite color :
            <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
            </select>
          </p>
          <br />
          <p>
            {this.state.firstName} {this.state.lastName}{" "}
          </p>
          <p>You are {this.state.gender}</p>
          <p>Your favorite color is {this.state.favColor}</p>
        </form>
      </div>
    );
  }
}
