import React, { Component } from 'react'
import AdminButton from './AdminButton'
import UserCard from "../MyCard/UserCard"
import api from "../../api"
class AdminViewUsers
    extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            id: window.localStorage.getItem('userId'),
        }
        // creates the new inputs
        this.createInputs = (e) => {
            let input = document.createElement('input')
            input.classList.add('form-control')
            input.placeholder = e.target.innerText;
            input.id = e.target.id
            input.addEventListener('change', this.collectValues)
            e.target.replaceWith(input)
        }
        //  collects the new value
        this.collectValues = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount = () => {
        this.setState({ isLoading: true })
        api.viewAllUsers().then(data => {
            if (data.data.users.length === 0) {
                let usersInfo = document.getElementById('usersInfo')
                usersInfo.innerHTML = `<h3>${data.data.message}</h3>`
            } else {
                this.setState({
                    users: data.data.users,
                    isLoading: false,
                })
            }
        })
    }
    //  componentDidUpdate() is called after componentDidMount() and can be useful to perform some action when the state changes. componentDidUpdate() takes as its first two arguments the previous props and the previous state.
    componentDidUpdate(prevState) {
        //  getting the state
        let { users } = this.state
        // if they are not the same then I want this to happen
        if (this.state.users.length !== prevState.users) {
            for (let i = 0; i < users.length; i++) {
                if (this.state.users._id !== users[i]._id) {
                    // if for loops and if statements then do this
                    api.viewAllUsers(this.state).then(data => {
                        let users = document.getElementById('users')
                        if (data.data.length === 0) {
                            // if there are not any in the database then do this
                            users.innerHTML = `<h3>${data.data.message}</h3>`
                        } else {
                            // if there are some still in the database then do this
                            users.innerHTML = `<h3>We currently have</h3><h1> <strong><em>${this.state.users.length}</em></strong></h1><h3> users</h3>`
                        }
                    }, {})
                }
            }
        }
    }
    // this is created so the admin user can delete the trainer
    // filter=> Reduce the set of matched elements to those that match the selector or pass the function's test.
    doDeleteUser = id => {
        this.setState({ users: this.state.users.filter(user => user._id !== id) })
    }
    doUpdateUser = () => {
        api.viewUser(this.state).then().then(data => {
            // data comes from the back end and I used a window.confirm because I wanted it to pop up after so many seconds have passed
            this.componentDidMount(data)
        })
    }
    render() {
        return (
            <>
                <div>
                    <section className="bg-dark">
                        <h1 className="text-danger" id="users">Users Added</h1>
                    </section>
                    <div className="ui four cards justify-content-center">
                        <div className='text-danger mt-3'>
                        </div>
                        {/* if this occurs show please wait or else show the cards */}
                        {this.state.isLoading ?
                            <div id="usersInfo" className="text-danger"></div>
                            :
                            this.state.users.map((user, i) => (
                                // is created when the user is added and has the key things
                                <UserCard
                                    key={i}
                                    id={user._id}
                                    userId={user._id}
                                    name={user.name}
                                    updateClick={this.createInputs}
                                    password={user.password}
                                    updateClick={this.createInputs}
                                    phone={user.phone}
                                    updateClick={this.createInputs}
                                    doDeleteUser={this.doDeleteUser}
                                    doUpdateUser={this.doUpdateUser}
                                />
                            ))
                        }
                    </div>
                    <div className="text-center mt-3"> <h3 className="text-danger">View My Trainers</h3>
                        <AdminButton />
                    </div>
                </div>
            </>
        )
    }
}
export default AdminViewUsers

