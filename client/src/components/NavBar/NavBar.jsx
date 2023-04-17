import React, { Component } from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import { Link } from "react-router-dom"
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                {/* on the large expand the button will show */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <NavbarBrand href="/"><i className="fa fa-weight"></i> No More Excuses</NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" var="danger">
                        <Nav className="mr-auto" id='links'>
                            {/* Link Component imported from router-dom, links allow us to route to a different component so if user is not logged in, we will see login */}
                            {this.props.loggedIn ? null :
                                <Link to='/logIn' className="text-light mr-3" >LogIn</Link>}
                            {this.props.loggedIn ? null : <Link to='/register' className="text-light mr-3" >Register</Link>}
                            {this.props.loggedIn ? null : <Link to='/registerTrainer' className="text-light mr-3" >Trainer Registery</Link>}
                            <Link to='/aboutus' className="text-light mr-3" >{this.props.loggedIn ? "About Us" : null}</Link>
                            <Link to='/survey' className="text-light mr-3" >{this.props.loggedIn ? "Survey" : null}</Link>
                            <Link to='/user/:id' className="text-light mr-3" >{this.props.loggedIn ? "Update Info" : null}</Link>
                            <Link to='/' className="text-light mr-3" onClick={this.props.logOut}>{this.props.loggedIn ? "Logout" : null}</Link>  
                                {this.props.loggedIn ?<Link to='/userPage' className="text-danger" id="userName"></Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
export default NavBar;

