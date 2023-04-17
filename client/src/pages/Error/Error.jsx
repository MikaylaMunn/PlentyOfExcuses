import React, {Component} from "react"
import {Button} from "react-bootstrap"

//  No routes hang, and if a route times out or is invalid, the user is presented with a stylized error page matching the rest of the site
class Error extends Component {
render () {
    // All pages are responsive to window size to organize content and readjust layout according to page width
        return (
            <>
            <div className="text-center">
            <h1 className="text-danger">404 Error, please press the home button</h1>
            <Button variant="danger" href="/">Back Home</Button>

            </div>
            </>
        )
        

}
}
export default Error