import React, { Component } from "react";

export default class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",

      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    //pulling elements from event.target
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({ [name]: value });
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
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">...Please choose a destination...</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
            <option value="eldoret">Eldoret</option>
            <option value="malindi">Malindi</option>
          </select>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Vegan ?
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.isKosher}
            />
            Kosher ?
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />
            Lactose Free ?
          </label>
          <br />
          <button>Sumbit</button>
        </form>
        <hr />
        <h2>Entered information :</h2>
        <p>
          Your Name: {this.state.firstName} {this.state.lastName}{" "}
        </p>
        <p>Your Gender: {this.state.gender} </p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Destination: {this.state.destination}</p>
        <p>
          Your Dietary restrictions:
          <p>
            {" "}
            <p>Vegan: {this.state.isVegan ? "YES" : "NO"}</p>
            <p>Kosher: {this.state.isKosher ? "YES" : "NO"}</p>
            <p>Lactose Free: {this.state.isLactoseFree ? "YES" : "NO"}</p>
          </p>
        </p>
      </div>
    );
  }
}
