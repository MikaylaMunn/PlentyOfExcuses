import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/insignia-logo-inverted.png'
import "./Footer.css"
// Navbar, forms, cards, buttons, or other components are used when appropriate
class MyFooter extends Component {
    render() {
        return (
            <>
                <footer className="mt-2 ui justify-content-center text-center bg-dark text-danger">
                    <div className="column">
                        <div className="row">
                            <div className="col-sm-4 mt-5">
                                <h5 className="fa fa-globe fa-2x offset-1"> On the Web</h5>
                                <br />
                                <ul className="fa fa-2x mt-3 text-center">
                                    <a href="facebook"><i className="text-danger fab fa-facebook mr-2"></i></a>
                                    <a href="instagram"><i className="text-danger fab fa-instagram mr-2"></i></a>
                                    <a href="twitter"><i className="text-danger fab fa-twitter mr-2"></i></a>
                                </ul>
                            </div>
                            <div className="col-sm-4 mt-5">
                               
                            </div>
                            <div className="col-sm-4 mt-5">
                                <div className="mt-3">&copy; Mikayla Munn 2021
                <p className="text-danger text-center"><strong>*WARNING</strong> this is an exercise app, please consult a doctor before attempting the program</p>
                                </div>
                                <Link to="/adminLogin" className="text-light "><i className="fa fa-weight mt-3 text-danger" ></i></Link>
                            </div>
                        </div>
                    </div>
                </footer >
            </>
        )
    }
}
export default MyFooter