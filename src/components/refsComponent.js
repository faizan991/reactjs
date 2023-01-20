import React, { Component } from 'react'

export class refsComponent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidCatch() {
        this.inputRef.current.focus()
    }
    componentDidMount() {
      // 
    }
    claickHandler =() => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
         <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default refsComponent
