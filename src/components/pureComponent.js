import React, { Component } from 'react'

export class pureComponent extends Component {
  componentDidMount(){
    
  }

  render() {
    return (
      <div>
        this is pure component taht only render when it detact changes in state or givin value
        <br />this will work on class Component
      </div>
    )
  }
}

export default pureComponent
