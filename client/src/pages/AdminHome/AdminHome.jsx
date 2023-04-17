// import items from react and react-bootstrap
import React from "react"
import AdminButton from '../../components/AdminView/AdminButton'
import ViewExerciseButton from '../../components/AdminView/viewExerciseButton'
import img from '../../assets/workoutphoto.jpeg'
import img1 from '../../assets/user_workout.jpeg'
import img2 from '../../assets/manworkingout.jpeg'
import img3 from '../../assets/exerciseSome.jpeg'
import img4 from "../../assets/lokkingGood.jpeg"
import AdminAccessButton from '../../components/AdminView/AdminAccessButton'
import AdminUserHomePage from "../../components/AdminView/AdminUserHomePage"
import AboutUsButton from "../../components/AdminView/AboutUsButton"
import "./AdminHome.css"
// 5 Componets for One Page
function AdminHome() {
 return (
     <>
    <h1 id="title" className="text-danger"> Where are we going?</h1>
    <div className="text-center" id="admin">
    <div className="ui middle aligned stackable grid container">
        <div className="row">
            <div className="four wide column left floated text-center">
                <h1 className="text-danger"> View the Trainers </h1>
                <img src={img} alt="Trainers" className="ui large bordered rounded image mt-4" id ="images"></img>
                <AdminButton />
            </div>
            <div className="four wide column center floated">
                <h1 className="text-danger"> Take Survey </h1>
                <img src={img2} alt="Man Working Out" className="ui large bordered rounded image mt-4" id ="images"></img>
                <ViewExerciseButton />
            </div>
            <div className="four wide right floated column">
                <h1 className="text-danger"> View the Users </h1>
                <img src={img1} alt="User's Working Out" className="ui large bordered rounded image mt-4" id ="images"></img>
                <AdminAccessButton />
            </div>
        </div>
        <div className="row">
        <div className="four wide center floated column">
                <h1 className="text-danger"> View the Users Homepage </h1>
                <AdminUserHomePage />
                <img src={img4} alt="Man Exercising" className="ui large bordered rounded image mt-4" id ="images"></img>
            </div>
            <div className="four wide right floated column">
                <h1 className="text-danger"> View the About Us Page </h1>
                <AboutUsButton />
                <img src={img3} alt="Man Exercising" className="ui large bordered rounded image mt-4" id ="images"></img>
            </div>
        </div>
    </div>
</div>
</>
 )
}
export default AdminHome