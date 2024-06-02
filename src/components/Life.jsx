import React, { Component } from 'react';

class Life extends Component {
  state = {
      count: 0
    };

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM.');
    
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate: Should the component update?');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: Component updated.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will be removed from the DOM.');
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('render: Rendering component.');
    return (
      <div>
        <h1>Lifecycle Methods in React</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Life;