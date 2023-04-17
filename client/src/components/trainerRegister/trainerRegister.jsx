// import items from react and react-bootstrap
import React, { Component } from 'react'
import {Button} from"react-bootstrap"
// import from other locations
import api from '../../api'
import "./trainerRegister.css"
class TrainerRegister extends Component {
  // The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  constructor(props) {
    super(props)
    //  App successfully accesses state to render at least three different components
    // Initializing local state by assigning an object to this.state.
    // Binding event handler methods to an instance.
    this.state = {
      name: '',
      degree: '',
      password: '',
      aboutme: '',
      phone: ""
    }
  }
  handleIncludeTrainer = (data) => {
    this.register = (data)
    this.setState({
      name: '',
      degree: '',
      password: '',
      aboutme: '',
      phone: ""
    })
    // comes from the api file in the client folder, the registerUser also comes from there so when the payload is passed this is what will show up
    api.registerTrainer(this.state).then().then(data => {
      register.innerHTML = "";
      let h1 = document.createElement('h1')
      h1.className = "text-danger"
      // If the message being sent to the front equals this string then do this
      if (data.data.message === "Sorry this user already exists.") {
        h1.innerHTML = `${data.data.message}`
        register.append(h1)
      } 
        if (data.data.authenticated === true) {
          this.props.register(data)
        // else then create this
        h1.innerHTML = `Thank you for registering, <br/>${data.data.message}`
        let div = document.createElement('div')
        div.className = "section"
        div.innerHTML = `<p>Please allow us to review your credentials</p>`
        div.className = "text-light"
        register.append(h1)
        h1.append(div)
      }
    })
  }
  render() {
    return (
      <>
        <div className="register text-danger" id="register">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h1 className="header">Trainer Registry</h1>
              <div className='label text-light'>Name: </div>
              <input
                className='form-control input-text'
                type="text"
                value={this.state.name}
                placeholder="Jane Doe"
                onChange={(event) => this.setState({ name: event.target.value })}
                />
              <div className='label text-light'>Degree: </div>
              <input
                className='form-control input-text'
                type="text"
                value={this.state.degree}
                placeholder="Atheletic Trainer"
                onChange={(event) => this.setState({ degree: event.target.value })}
                />
              <label className="text-light">Password:</label>
              <input
                className='form-control input-text'
                type="password"
                value={this.state.value}
                onChange={(event) => this.setState({ password: event.target.value })}
                />
              <div className='label text-light'>About Me: </div>
              <textarea rows="5" cols="20"
                className='form-control input-text'
                type="text"
                placeholder="I enjoy this...."
                value={this.state.aboutme}
                onChange={(event) => this.setState({ aboutme: event.target.value })}
               >
              </textarea>
              <div className='label text-light'>Phone Number: </div>
              <input
                className='form-control input-text'
                type="phone"
                placeholder="1234567890"
                min="10"
                max="16"
                value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })}
                />
              <Button  onClick={this.handleIncludeTrainer} variant = "primary"className=' mt-2' >Register</Button>
            <Button variant = "danger" className=' mt-2 ml-2' href='/'>Cancel</Button>
            <div className="ui message">
                Already A Trainer? <a href="/trainerlogIn">Sign In</a>
              </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
// require” and “module.exports” are used at least ten times throughout the app
export default TrainerRegister