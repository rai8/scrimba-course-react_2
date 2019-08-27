import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ firstName: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>fill the form below</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <p>{this.state.firstName}</p>
        </form>
      </div>
    );
  }
}
