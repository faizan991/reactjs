import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: '',
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  formSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const { userId, title, body, } = this.state;

    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>User id:</label>
          <input type='text' value={userId} name='userId' onChange={this.changeHandler} />
        </div>
        <div>
          <label>Title:</label>
          <input type='text' value={title} name='title' onChange={this.changeHandler} />
        </div>
        <div>
          <label>Body:</label>
          <input type='text' value={body} name='body' onChange={this.changeHandler} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default PostForm
