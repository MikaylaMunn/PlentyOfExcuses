import React, { Component } from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class AboutUsButton extends Component {
    render() {
        return (
            <>
               <Link to ='/aboutus'> <Button variant="danger" className=' mt-2'>Learn More</Button></Link>
            </>
        )
    }
}
export default AboutUsButton