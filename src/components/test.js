import React, { Component } from 'react'

export class test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 0,
            textValue : "",
            formValueSubmit : "Default",
        }

        this.in = this.increment.bind(this);

        // text ? 'don' : 'not'
        // text && 'only if '
    }

    increment() {
        /*this.setState({
            text : this.state.text + 1
        },(() => {
            console.log('this wil run after state value update' , this.state.text);
        }))*/

        // update previous state to new
        this.setState((pre) => ({
            text: pre.text + 1
        }), (() => {
            console.log('this wil run after state value update', this.state.text);
        })
        )
    }

    inre = () => {
        this.setState((pre) => ({
            text: pre.text + 1
        }), (() => {
            console.log('this wil run after state value update', this.state.text);
        })
        )
    }

    textValueChange = event => {
        this.setState({
            textValue : event.target.value
        } )
    }
    formSubmit = event => {
        event.preventDefault()
        let ValueSubmit = "";

        if(this.state.textValue === "") {
            ValueSubmit = "Default"
        } else {
            ValueSubmit = this.state.textValue
        }
        this.setState ({
            formValueSubmit : ValueSubmit,
        })
    }
    render() {

        // this.state.text = this.state.text +1;
        // binding method in constructor is good practice
        return (
            <div>
                <h1>text {this.state.text}</h1>
                {/* method binding */}
                <button onClick={this.increment.bind(this)}>Click Button</button>
                <br />
                <button onClick={() => this.increment()}>Click Button</button>
                <br />
                <button onClick={this.in}>Click Button</button>
                <br />
                <button onClick={this.inre}>Click Button</button>

                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.textValue} onChange={this.textValueChange} />
                    <button>Submit</button>
                </form>

                <p>{this.state.formValueSubmit}</p>
            </div>
        )
    }
}

export default test
