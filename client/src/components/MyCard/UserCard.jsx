import React from 'react'
import './Card.css'
import api from "../../api"

function UserCard(props) {
    // function for the delete trainer with a window confirmation
    function deleteUser(e) {
        e.preventDefault()
        if (
            // pops up to confirm to delete
            window.confirm(
                `Do you want to delete the user ${props.name} permanently?`,
            )
        ) {
            // follows these to delete them
            api.deleteUserById(props.id);
            props.doDeleteUser(props.id)
        }
    }
    function updateUser(e) {
        e.preventDefault()
        {
            // follows these to update them
            api.getUserById(props.id);
            props.doUpdateUser(props.id)
        }
    } 
    return (
        <>
            {/* the props come through the users name and such (model)  */}
            <div className="ui card bg-dark">
                <div className="content">
                    <div className="myHeader text-danger">
                    <em>User Name: </em> <p><a onClick={props.updateClick} id= 'name' name={props.userId}>{props.name}</a></p>
                    </div>
                    <div className="description text-light text-center mt-3">
                    <em>Phone Number: </em><p><a onClick={props.updateClick} id='phone' as="h4" name={props.userId}>{props.phone}</a></p>
                    </div>
                    <div className="description text-light text-center mt-3">
                        <br />
                        <em>Password: </em><p><a onClick={props.updateClick} id='password' name={props.userId}>{props.password}</a></p>
                    </div>
                </div>
                <div className="ui two bottom attached buttons justify-content-center">
                    <div className="ui inverted white button w-25"  onClick={deleteUser} id={props.id}>Delete User
                    </div>
                    <div className="ui inverted white button w-25"  onClick={updateUser} >Update User
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserCard
