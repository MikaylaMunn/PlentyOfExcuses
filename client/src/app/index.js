
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// all my made imports
import NavBar from '../components/NavBar/NavBar'
import Aboutus from '../pages/AboutUs/aboutUs.jsx'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Homepage from '../pages/Homepage/Homepage'
import MyFooter from "../components/Footer/Footer"
import Survey from "../components/Survey/Survey"
import TrainerRegister from '../components/trainerRegister/trainerRegister'
import Error from '../pages/Error/Error'
import TrainerLogin from "../components/Trainer/Trainer"
import AdminLogin from "../pages/Admin/Admin"
import Userpage from "../components/userHomePage/userHomePage"
import UpdateUser from "../components/UpdateUser/UpdateUser"
import AdminView from "../components/AdminView/AdminView"
import AdminViewUsers from "../components/AdminView/AdminViewUsers"
import AdminHome from "../pages/AdminHome/AdminHome"

import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
    constructor(props) {
        super(props)
        // user is not logged in yet
        this.state = {
            loggedIn: false,
        }
        // occurs when the user registers
        this.register = (data) => {
            this.setState({ loggedIn: true, data: data })
        }
        // occurs when the user logs into the site
        this.logIn = (data) => {
            this.setState({ loggedIn: true, data: data })
        }
        this.loggedOut = (data) => {
            this.setState({ loggedIn: false, data: data })
            // clears the userName after the user logsout
            let userName = document.getElementById("userName")
            userName.innerHTML = ""
        }
    }

    render() {
        return (
            //  React router is used to render at least one component depending on path
            <>
                {/*  All features displayed to the user are functional (unless explicitly tagged as a placeholder) */}
                <Router>
                    <NavBar loggedIn={this.state.loggedIn} logOut={this.loggedOut} />
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/logIn" element={<Login logIn={this.logIn} />} />
                        <Route exact path="/register" element={<Register register={this.register} />} />
                        <Route exact path="/survey" element={<Survey logIn={this.logIn} />} />
                        <Route exact path="/aboutus" element={<Aboutus logIn={this.logIn} />} />
                        <Route exact path="/userPage" element={<Userpage logIn={this.logIn} />} />
                        <Route exact path="/user/:id" element={<UpdateUser  logIn={this.logIn} />} />
                        <Route exact path="/registerTrainer" element={<TrainerRegister register={this.register} />} /> 
                        <Route exact path="/trainerlogIn" element={<TrainerLogin logIn={this.logIn} />} />
                        <Route path="/*" element={<Error />} />
                        <Route path="/adminLogin" element={<AdminLogin logIn={this.logIn} />} />
                        <Route path="/adminHome" element={<AdminHome logIn={this.logIn} />} />
                        <Route path="/adminViewTrainers" element={<AdminView />} />
                        <Route path="/adminViewUsers" element={<AdminViewUsers />} />
                    </Routes>
                    <br/>   
                    <MyFooter />
                </Router>
            </>
        )
    }
}
export default App