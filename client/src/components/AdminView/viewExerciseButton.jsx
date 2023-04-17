import React, { Component } from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class ViewExerciseButton extends Component {
    render() {
        return (
            <>
               <Link to ='/survey'> <Button variant="danger" className=' mt-2'>Take Survey</Button></Link>
            </>
        )
    }
}
export default ViewExerciseButton 