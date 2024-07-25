import React from "react";
class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h2>Counter App</h2>
        Count: {this.state.count}
        <br />
        <br />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
export default ClassCounter;
