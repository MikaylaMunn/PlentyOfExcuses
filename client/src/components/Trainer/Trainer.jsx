import React, { Component } from 'react'
// import from other locations
import api from '../../api'
import TrainerPage from '../trainerHomepage/trainerHomepage'
class TrainerLogin extends Component {
  // The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  constructor(props) {
    super(props)
    //  App successfully accesses state to render at least three different components
    // Initializing local state by assigning an object to this.state.
    // Binding event handler methods to an instance.
    this.state = {
      name: '',
      password: '',
    }
  }
  // call this function to happen inside the form, once the user presses the button submit then the state will be set and this information will be brought up
  handleTrainerLogin = (data) => {
    this.logIn = (data)
    this.setState({
      name: '',
      password: '',
    })
    api.logTrainer(this.state).then().then(data => {
      // comes from the api file in the client folder, the registerUser also comes from there so when the payload is passed this is what will show up
      if(data.data.authenticated  !== true) {
        logIn.innerHTML =`${data.data.message}`
      } 
    logIn.innerHTML = '';
      let h1 = document.createElement('h1')
      if(data.data.authenticated === true) {
        this.props.logIn(data)
        let userName = document.getElementById('userName'),
        trainerpage =  document.getElementById('trainerHomepage')
        trainerpage.classList.remove('hidden')
        userName.className = "text-danger"
        userName.innerHTML = `<h6>${data.data.message}</h6>`
        h1.innerText = `${trainerLogged.data.message}`
        h1.className = "text-danger"
        logIn.append(h1)
      }
    })
  }
  render() {
    return (
      // this is what the user sees when they hit the login page
      <>
        <div className="register text-danger" id="logIn">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h1 className="header ">Trainer Login</h1>
              <div className='label text-light'>Name: </div>
              <input
                className='form-control input-text'
                type="text"
                value={this.state.name}
                onChange={(event) => this.setState({ name: event.target.value })}
               />
              <label  className="text-light">Password (8 characters minimum):</label>
              <input
                className='form-control input-text'
                type="password"
                value={this.state.value}
                min="8"
                onChange={(event) => this.setState({ password: event.target.value })}
                 />
              <button className='btn btn-primary button mt-2' onClick={this. handleTrainerLogin}>LogIn</button>
              <button className='btn btn-danger cancel-button mt-2 ml-2' href='/'>Cancel</button>
              <div className="ui message">
                New to us? <a href="/registerTrainer">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden" id="trainerHomepage">
          <TrainerPage/>
        </div>
      </>
    )
  }
}

export default TrainerLogin