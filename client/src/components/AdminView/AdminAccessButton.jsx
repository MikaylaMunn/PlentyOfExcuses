import React, { Component } from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class AdminAccessButton extends Component {
    render() {
        return (
            <>
               <Link to ='/adminViewUsers'> <Button variant="danger" className=' mt-2'>View Users</Button></Link>
            </>
        )
    }
}
export default AdminAccessButton