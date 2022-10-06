import React, { Component } from "react";

export default class Example extends Component {
  state = { count: 0 };
  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>You click {this.state.count} times</p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    );
  }
}
