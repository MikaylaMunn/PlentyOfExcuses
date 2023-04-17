import React, { useState } from "./node_modules/react"
import { Button, Modal } from "./node_modules/react-bootstrap";
import { Link } from "./node_modules/react-router-dom";
import img from "../../assets/workoutphoto.jpeg"
import img1 from "../../assets/fish.jpeg"
import img2 from '../../assets/salad.jpeg'

function Trainerpage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="ui middle aligned stackable grid container ">
                <div className="row">
                    <div className="eight wide column text-center">
                        <h3 className="text-danger"></h3>
                        <h3 className="text-danger">Here are some of our clients </h3>
                        {/* had to link in order to see the information in the upper right corner */}
                        <Link to="/aboutus"> <Button variant="outline-danger ">Check Them Out</Button></Link>
                    </div>
                    <div className="six wide right floated column">
                        <img src={img} alt="Trainers" className="ui large bordered rounded image"></img>
                    </div>
                </div>
            </div>
            <div className="ui middle aligned stackable grid container ">
                <div className="row">
                    <div className="eight wide column">
                        <img src={img1} alt="Fish with Lemon" className="ui large bordered rounded image"></img>
                    </div>
                    <div className="six wide right floated column text-center">
                        <h3 className="text-danger">Healthy Recipes</h3>
                        <h3 className="text-danger">Here are some healthy recipes that are yummy and easy to make. You are not a master chief and your time is valuable, so give them a try</h3>
                        <Button variant="outline-danger" onClick={handleShow}>Read More</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Baked Chicken with Sauteeéd Spinach Feta and Pomegranate Salad</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={img2} alt="Baked Chicken with Sauteeéd Spinach Feta and Pomegranate Salad" className='w-100' />
                                <h4 className="text-danger">List of ingredients</h4>
                                <p>
                                    -2 Chicken Breast <br /> -1 cup Pomegranate  seeds  <br /> -1 cup Crumbled Feta Cheese <br />
                                    -1/2 lb of Spinach (fresh)<br /> -2 tsp of Red Onion (diced) <br />   -4 Whole Roasted Cloves of  Garlic  (pressed) <br /> -2 teaspoon (tsp) of Rosemary (ground)  <br />    - 3 Tablespoons(Tbsp) of butter (clarified)
                                    </p>
                                <br />
                                <h4 className="text-danger">Chicken Breast</h4>
                                <ol>
                                    <li>Arrange the Breast on a baking sheet</li>
                                    <li>Season with Onion, Garlic, and Rosemary</li>
                                    <li>Bake until golden brown on 325&deg;F</li>
                                    <li>Slice the Chicken Breast into small bite size pieces</li>
                                </ol>
                                <h4 className="text-danger">Salad</h4>
                                <ol>
                                    <li>Pour the liquid from the chicken into a sauteé pan</li>
                                    <li>Heat to medium temp</li>
                                    <li>Add spinach and sauteé until slightly wilted</li>
                                    <li> Remove from heat, toss in and fold the Feta Cheese crumbles, Chicken  Breasts, and sprinkle in the Pomegranate seeds (as needed for garnish)</li>
                                    <li>Season to taste with salt and pepper</li>
                                </ol>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
      </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Trainerpage