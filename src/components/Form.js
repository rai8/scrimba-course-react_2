import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>fill the form below</h1>
        <form>
          <input type="text" placeholder="First Name" />
        </form>
      </div>
    );
  }
}
