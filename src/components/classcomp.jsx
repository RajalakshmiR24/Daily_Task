import React, { Component } from 'react';

export class ClassComp extends Component {
  handleClick = () => {
    alert("hi");
    console.log("Hi");
  }

  render() {
    return (
      <>
        <button className='bg-green-600 border-2 border-black p-2 ' onClick={this.handleClick}>click</button>
      </>
    );
  }
}

export function Click() {
  const handleSubmit = () => {
    alert("Hi");
  }

  return (
    <>
      <button className='bg-red-600 border-2 border-black p-2' onClick={handleSubmit}>Submit</button>
    </>
  );
}


// will mount, dom 1st
// did update, when changes
// will unmount, when terminate

