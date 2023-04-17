import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import './Card.css'

function MyCard(props) {
    // used to call the model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* the props come through the trainers name and such (model)  */}
            <div className="ui card bg-dark">
                <div className="content">
                    <div className="myHeader text-danger"> <em>Trainer Name:</em><br/>
                        {props.name}
                    </div>
                    <div className="description text-light text-center mt-3">
                        <h3><em>Degree:</em><br/> {props.degree}</h3>
                    </div>
                    <div className="description text-light text-center mt-3">
                       <br/>
                        <h3><em>About Me:</em><br/>{props.aboutme}</h3>
                    </div>
                </div>
                <div className="ui two bottom attached buttons">
                    <div className="ui inverted button text-light"
                onClick={handleShow} ><i className="fa fa-phone text-light" ></i> Text Message
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Info: {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hello, I look forward to hearing from you soon. Have a Great Day!<br />
                    <strong>Phone: </strong>{props.phone}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
      </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MyCard

