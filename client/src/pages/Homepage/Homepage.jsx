/// imported from react
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import exercise from '../../assets/execisingMan.jpeg'
// my import
import './Homepage.css'
class Homepage extends Component {
   
    // All pages are responsive to window size to organize content and readjust layout according to page width
    render() {
        return (
            // what the user sees when they first come to the site
            <>
            {/*  App has a descriptive, informative subtitle or intro blurb summarizing its intent and capabilities on the home page */}
                <div>
                    <h1 className="title text-danger mt-5">
                        Plenty of Excuses
                </h1>
                <div className="text-center mt-3" >
                <img src={exercise} alt="Man Exercising" className="manExercising h-25 w-25  rounded-circle"/>
                </div>
                <div className="text-center text-danger">
                    {/* subtitle */}
                    <div className="subTitle">
                    Mind. Body. &amp; Spirit.</div>
                </div>
                {/* disclaimer */}
                    <section className="ui section divider"></section>
                    <div className="text-center">
                        <Button variant="danger" href="/register" >Register</Button>
                        <br/>
                    </div>
                </div>
            </>
        )
    }
}
// export to be used on the App 
export default Homepage