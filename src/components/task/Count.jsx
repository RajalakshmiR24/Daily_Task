import React, { Component } from 'react'

export class Count extends Component {
  state = {
    Count: 0,
    message: "Clicked 0 times",
    buttonText: ""
  }

  updateMessage() {
    this.setState({ message: `Clicked ${this.state.Count} times` });
  }

  handleMouseOut() {
    this.setState({ buttonText: '' });
  }

  handleMouseIn(text) {
    this.setState({ buttonText: text });
  }

  resetCount() {
    this.setState({ Count: 0 }, this.updateMessage);
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-yellow-800 text-2xl font-semibold mb-4">{this.state.message}</h1>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300"
            onClick={() => this.setState({ Count: this.state.Count + 1 }, this.updateMessage)}
            onMouseOver={() => this.handleMouseIn('Increase')}
            onMouseOut={() => this.handleMouseOut()}
          >
            +
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300"
            onClick={() => this.setState({ Count: this.state.Count - 1 }, this.updateMessage)}
            onMouseOver={() => this.handleMouseIn('Decrease')}
            onMouseOut={() => this.handleMouseOut()}
          >
            -
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 border-2 border-red-600 transition-colors duration-300"
            onClick={() => this.resetCount()}
            onMouseOver={() => this.handleMouseIn('Reset')}
            onMouseOut={() => this.handleMouseOut()}
          >
            Reset
          </button>
        </div>
        <p className="mt-4 text-gray-700 text-lg">{this.state.buttonText}</p>
      </div>
    );
  }
}
