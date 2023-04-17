// import items from react and react-bootstrap
import React, { Component } from 'react'
import { Button} from "react-bootstrap"
// import from other locations
import "./Register.css"
import api from '../../api'
// with an option to create an account.
class Register extends Component {
  // The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  constructor(props) {
    super(props)
    //  App successfully accesses state to render at least three different components
    this.handleIncludeUser = this.handleIncludeUser.bind(this);
    // Initializing local state by assigning an object to this.state.
    // Binding event handler methods to an instance.
    this.state = {
      name: '',
      phone: '',
      password: '',
    }
  }
  handleIncludeUser = (data) => {
    this.register = (data)
    this.setState({
      name: '',
      phone: '',
      password: ''
    })
    // comes from the api file in the client folder, the registerUser also comes from there so when the payload is passed this is what will show up
    api.registerUser(this.state).then().then(data => {
      register.innerHTML = "";
      let h1 = document.createElement('h1')
      h1.className = "text-danger"
      if (data.data.authenticated === true) {
        this.props.register(data)
        window.localStorage.setItem("userId", data.data.users._id)
      }
      // If the message being sent to the front equals this string then do this
      if (data.data.message === "Sorry this user already exists.") {
        h1.innerHTML = `${data.data.message}`
        register.append(h1)
      } else {
        let userName = document.getElementById('userName')
        // else then create this
        userName.className = "text-danger"
        userName.innerHTML = `<h6> Hello, ${data.data.message}</h6>`
        let div = document.createElement('div')
        div.className = "section"
        div.innerHTML = `<p>Welcome, ${data.data.message} to No More Excuses</p>`
        div.className = "text-light"
        register.append(h1)
        h1.append(div)
      }
    })
  }
  render() {
    return (
      // When a user tries to post on the forums , they need  to create an account.
        <div className="register text-danger mb-5" id="register">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h1 className="header ">Register</h1>
              <div className='label text-light'>Name: </div>
              <input
                className='form-control input-text'
                type="text"
                placeholder="Jane Doe"
                value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}
               />
              <div className='label text-light'>Phone Number: </div>
              <input
                className='form-control input-text'
                type="phone"
                placeholder="1234567890"
                min="10"
                max="16"
                value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })}
               />
              <label className="text-light">Password:</label>
              <input
                className='form-control input-text'
                type="password"
                value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })}
               />
              <Button variant="primary" className='mt-2' onClick={this.handleIncludeUser.bind(this)}>Register</Button>
              <Button variant="danger" className='mt-2 ml-2' href='/'>Cancel</Button>
              <div className="ui message">
                Already A Member? <a href="/login">Sign In</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Register