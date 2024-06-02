import React, { Component } from 'react'

export default class Classprops extends Component {
    constructor(value){
        super(value);
        this.state = {name:value};
    }
    
  render() {
    return (
      <>
        <p>Username is  {this.props.name}</p>
      </>
    )
  }
}
