import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostForm'
class LIstPosts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: '',
            showAddForm: false
        }
        this.showForm = this.showListForm.bind(this)
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({ posts: res.data })
        }).catch(error => {
            console.log('Api Error', error);
            this.setState({ errorMsg: 'Api Error' })
        })
    }

    showListForm() {
        return this.state.showAddForm === false ? this.setState({ showAddForm: true }) : this.setState({ showAddForm: false })
    }

    render() {
        const { posts, errorMsg, showAddForm } = this.state

        return (
            <div>
                <div>
                    <button onClick={this.showForm}>PostForm</button>
                    {showAddForm && <PostForm />}
                </div>


                <p>This is list Of Post </p>
                <table>
                    <thead>
                        <tr>
                            <th>ID && Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.length > 0 ?
                                posts.map(post =>
                                    <tr key={post.id}>
                                        <td>{post.id} : {post.title}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                    // <div key={post.id}> <p> { post.title } </p> </div>
                                )
                                : null
                        }

                        {
                            errorMsg ? <div>{errorMsg}</div> : ''
                        }
                    </tbody>
                </table>

                <p>This is list Of Post </p>
            </div>
        )
    }
}

export default LIstPosts
