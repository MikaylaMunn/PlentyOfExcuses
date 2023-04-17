import React from 'react'
import api from "../../api"
import './Card.css'
function TrainerCard(props) {
    // function for the delete trainer with a window confirmation
    function deleteTrainer(e) {
        e.preventDefault()
        if (
            // pops up to confirm to delete
            window.confirm(
                `Do you want to delete the trainer ${props.name} permanently?`,
            )
        ) {
            // follows these to delete them
            api.deleteTrainerById(props.id);
            props.doDeleteTrainer(props.id)
        }
    }
    // that is the function that will trigger the updateTrainer
    function updateTrainers(e) {

        e.preventDefault()
        {
            // follows these to update them
            api.getTrainerById(props.id);
            props.doUpdateTrainers(props.id)
        }
    }
    return (
        <>
            {/* the props come through the trainers name and such (model)  */}
            <div className="ui card bg-dark">
                <div className="content">
                    <div className="myHeader text-danger">
                        <em>Trainer Name: </em> <p><a onClick={props.updateClick} id='name' name={props.userId}>{props.name}</a></p>
                    </div>
                    <div className="description text-light text-center mt-3">
                    <em>Degree: </em>< p><a onClick={props.updateClick} id= 'degree'  name={props.userId} degree={props.userId}>{props.degree}</a></p>
                    </div>
                    <div className="description text-light text-center mt-3">
                        <br />
                        <em>Password: </em><p><a onClick={props.updateClick} id='password' name={props.userId}>{props.password}</a></p>
                    </div>
                    <div className="description text-light text-center mt-3">
                        <br />
                        <em>About Me: </em><p rows="5" cols="20"><a onClick={props.updateClick} id='aboutme'  name={props.userId} aboutme={props.userId}>{props.aboutme}</a></p>
                    </div>
                </div>
                <div className="ui two bottom attached buttons justify-content-center">
                    <div className="ui inverted white button w-25" onClick={deleteTrainer} id={props.id}>Delete Trainer
                    </div>
                    <div className="ui inverted white button w-25" onClick={updateTrainers}  >Update Trainer
                    </div>
                </div>
            </div>
        </>
    )
}
export default TrainerCard

