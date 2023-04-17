import React, { Component } from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class AdminUserHomePage extends Component {
    render() {
        return (
            <>
               <Link to ='/userPage'> <Button variant="danger" className=' mt-2'>See More</Button></Link>
            </>
        )
    }
}
export default AdminUserHomePage