import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={() => this.decrement()}>Decrease</button>
      </div>
    );
  }
}

export default App;
