import React, { Component } from "react";
import api from "../../../src/api/index"
class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: "",
            password: "",
            id: window.localStorage.getItem('userId'),
            confirmUser: false,
        }
        // creates new inputs
        this.createInputs = (e) => {
            let input = document.createElement('input')
            input.classList.add('form-control')
            input.placeholder = e.target.innerText;
            input.id = e.target.id
            input.addEventListener('change', this.collectValues)
            e.target.replaceWith(input)
        }
        this.collectValues = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        this.deleteUser = (e) => {
            // sends them here when they delete
            api.deleteTheUserById(this.state.id).then().then(userCurr => {
                if (window.confirm(`${userCurr.data.message}`)) {
                    window.location = "/"
                }
            })
        }
        this.updateUser = (e) => {
            api.viewUser(this.state).then().then(data => {
                // data comes from the back end and I used a window.confirm because I wanted it to pop up after so many seconds have passed
                if (data.data.authenticated === true) {
                    this.setState({
                        confirmUser: true
                    })
                }
            })
            this.componentDidMount()
        }
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount = () => {
        api.getUserById(`${this.state.id}`).then(data => {
            this.setState({
                name: data.data.users.name,
                password: data.data.users.password,
                phone: data.data.users.phone
            })
        })
    }
    //  componentDidUpdate() is called after componentDidMount() and can be useful to perform some action when the state changes. componentDidUpdate() takes as its first two arguments the previous props and the previous state.
    componentDidUpdate = () => {
        if (this.state.confirmUser === true) {
            api.viewUser(this.state).then().then(data => {
                let myInfo = document.getElementById('myInfo'),
                    userName = document.getElementById('userName')
                userName.innerHTML = `<h6> Hello, ${data.data.users.name}</h6>`
                myInfo.innerHTML = `<div class="text-center"><h3> Thank you for updating your information, ${data.data.users.name}</h3></div>`
                myInfo.className = "text-danger"
            })
        }
    }
    // function for the delete trainer with a window confirmation
    render() {
        return (
            <>
                <div className="container mt-3" id="myInfo">
                    <div className="row justify-content-center text-center">
                        <div className="ui card bg-dark text-center">
                            <div className="content">
                                <div className="myHeader text-danger">
                                    <em>User Name: </em> <p><a onClick={this.createInputs} id='name' name={this.userId}>{this.state.name}</a></p>
                                </div>
                                <div className="description text-light text-center mt-3">
                                    <em>Phone Number: </em><p><a onClick={this.createInputs} id='phone' as="h4" name={this.userId}>{this.state.phone}</a></p>
                                </div>
                                <div className="description text-light text-center mt-3">
                                    <br />
                                    <em>Password: </em><p><a onClick={this.createInputs} id='password' name={this.userId}>{this.state.password}</a></p>
                                </div>
                            </div>
                            <div className="ui two bottom attached buttons justify-content-center">
                                <div className="ui inverted white button w-25" onClick={this.deleteUser} id={this.state.id}>Delete User
                    </div>
                                <div className="ui inverted white button w-25" onClick={this.updateUser} id={this.state.id}>Update User
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default UpdateUser