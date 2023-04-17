import React, { Component } from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class AdminButton extends Component {
    render() {
        return (
            <>
               <Link to ='/adminViewTrainers'> <Button variant="danger" className=' mt-2'>View Trainers</Button></Link>
            </>
        )
    }
}
export default AdminButton