// import items from react and react-bootstrap
import React, { Component } from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./Admin.css"
import AdminHome from '../AdminHome/AdminHome'
// import from other locations
import api from '../../api'
class AdminLogin extends Component {
    // The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    constructor(props) {
        super(props)
        this.handleLoginAdmin = this.handleLoginAdmin.bind(this);
        // Initializing local state by assigning an object to this.state.
        // Binding event handler methods to an instance.
        this.state = {
            name: '',
            password: ''
        }
    }
    handleLoginAdmin = (data) => {
        this.logIn = (data)
        this.setState({
            name: '',
            password: '',
        })
        // comes from the api file in the client folder, the registerUser also comes from there so when the payload is passed this is what will show up
        api.adminlogIn(this.state).then().then(data => {
            let logIn = document.getElementById('logIn')
            if (data.data.length === 0) {
                logIn.innerHTML = `<h3>${data.data.message}</h3>`;
            }
            if (data.data.authenticated === true) {
                console.group(data, "here is data")
                this.props.logIn(data)
                let userName = document.getElementById('userName'),
                    admin = document.getElementById('admin'),
                    h1 = document.getElementById('title')
                admin.classList.remove('hidden')
                logIn.classList.add('hidden')
                userName.innerHTML = `<h6>${data.data.message}</h6>`
                h1.innerHTML = `${data.data.message}`
            }
        })
    }
    render() {
        return (
            <>
                <div className="register text-danger" id="logIn">
                    <div className="ui middle aligned center aligned grid">
                        <div className="column">
                            <h1 className="header ">Admin Login</h1>
                            <div className='label text-light'>Name: </div>
                            <input
                                className='form-control input-text'
                                type="text"
                                value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}
                            />
                            <label for="pass" className="text-light">Password</label>
                            <input
                                className='form-control input-text'
                                type="password"
                                value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })}
                            />
                            <Button variant="primary" onClick={this.handleLoginAdmin.bind(this)} className=' mt-2'>Login</Button>
                            <Button variant="danger" className=' mt-2 ml-2' href='/'>Cancel</Button>
                        </div>
                    </div>
                </div>
                <div className="hidden text-center" id="admin">
                    <h1 id="title" className="text-danger"></h1>
                    <AdminHome/>
                </div>
            </>
        )
    }
}
export default AdminLogin