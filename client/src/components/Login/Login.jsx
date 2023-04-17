// import items from react and react-bootstrap
import React, { Component } from "react"
import { Button } from "react-bootstrap"
import Userpage from "../userHomePage/userHomePage"
// import from other locations
import "./Login.css"
import api from '../../api'
class Login extends Component {
  // The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  constructor(props) {
    super(props)
    this.handleLoginUser = this.handleLoginUser.bind(this);
    // Initializing local state by assigning an object to this.state.
    // Binding event handler methods to an instance.
    this.state = {
      name: '',
      password: ''
    }
  }

  handleLoginUser = (data) => {
    this.logIn = (data)
    this.setState({
      name: '',
      password: '',
    })
    // comes from the api file in the client folder, the registerUser also comes from there so when the payload is passed this is what will show up
    api.logUser(this.state).then().then(data => {
      let logIn = document.getElementById('logIn')
      logIn.innerHTML = ``
      if (data.data.users.length === 0) {
        logIn.innerHTML = `<h3>${data.data.message} <a href="/register">Register Here</a></h3>`;
      }
      if (data.data.authenticated === true) {
        this.props.logIn(data)
        let userName = document.getElementById('userName')
        window.localStorage.setItem("userId", data.data.users[0]._id)
        userName.className = "text-danger"
        userName.innerHTML = `<h6> Hello, ${data.data.message}</h6>`
        let userpage = document.getElementById('userHome')
        userpage.classList.remove('hidden')
      }
      
    })
  }
  render() {
    
    return (
      <>
        <div className="register text-danger" id="logIn">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h1 className="header ">Login</h1>
              <div className='label text-light'>Name: </div>
              <input
                className='form-control input-text'
                type="text"
                value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}
              />
              <label className="text-light">Password:</label>
              <input
                className='form-control input-text'
                type="password"
                value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })}
              />
              <Button onClick={this.handleLoginUser.bind(this)} variant="primary" className=' mt-2' >Login</Button>
              <Button variant="danger" className=' mt-2 ml-2' href='/'>Cancel</Button>
              <div className="ui message">
                Want to Join? <a href="/register">Register</a>
              </div>
            </div>
          </div>
        </div>
        <div id="userHome" class="hidden">
          <Userpage/>
        </div>
      </>
    )
  }
}

export default Login
