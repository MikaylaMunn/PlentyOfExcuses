import React, { Component } from 'react'
import TrainerCard from "../MyCard/TrainerCard"
import AdminAccessButton from './AdminAccessButton'
import api from "../../api"
class AdminView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainers: [],
            isLoading: false,
            id: ""
        }
        // creates the new inputs
        this.createInputs = (e) => {
            // e.preventDefault()
            this.setState({
                id: e.target.name
            })
            // makes the new inputs
            let input = document.createElement('input')
            input.classList.add('form-control')
            input.placeholder = e.target.innerText;
            input.id = e.target.id
            input.addEventListener('change', this.collectValues)
            e.target.replaceWith(input)
        }
        //  collects the new value
        this.collectValues = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount = () => {
        this.setState({ isLoading: true })
        api.viewAllTrainers().then(data => {
            if (data.data.trainers.length === 0) {
                let trainersInfo = document.getElementById('trainersInfo')
                trainersInfo.innerHTML = `<h3>${data.data.message}</h3>`
            } else {
                this.setState({
                    trainers: data.data.trainers,
                    isLoading: false,
                })
            }
        })
    }
    //  componentDidUpdate() is called after componentDidMount() and can be useful to perform some action when the state changes. componentDidUpdate() takes as its first two arguments the previous props and the previous state.
    componentDidUpdate(prevState) {
        //  getting the state
        let { trainers } = this.state
        // if they are not the same then I want this to happen
        if (this.state.trainers.length !== prevState.trainers) {
            for (let i = 0; i < trainers.length; i++) {
                if (this.state.trainers._id !== trainers[i]._id) {
                    // if for loops and if statements then do this
                    api.viewAllTrainers(this.state).then(data => {
                        let trainers = document.getElementById('trainers')
                        if (data.data.length === 0) {
                            // if there are not any in the database then do this
                            trainers.innerHTML = `<h3>${data.data.message}</h3>`
                        } else {
                            // if there are some still in the database then do this
                            trainers.innerHTML = `<h3>We currently have</h3><h1> <strong><em>${this.state.trainers.length}</em></strong></h1><h3>trainers</h3>`
                        }
                    }, {})
                }
            }
        }
    }
    // this is created so the admin user can delete the trainer
    // filter=> Reduce the set of matched elements to those that match the selector or pass the function's test.
    doDeleteTrainers = id => {
        this.setState({ trainers: this.state.trainers.filter(trainer => trainer._id !== id) })
    }
    doUpdateTrainers = () => {
        api.viewTrainers(this.state).then().then(data => {
            // data comes from the back end and I used a window.confirm because I wanted it to pop up after so many seconds have passed
            this.componentDidMount(data)
        })
    }
    render() {
        return (
            <>
                <div>
                    <section className="bg-dark">
                        <h1 className="text-danger" id="trainers">Trainers Added</h1>
                    </section>
                    <div className="ui four cards justify-content-center mb-4 mt-3 ">
                        <div className='text-danger mt-3 row' >
                        </div>
                        {/* if this occurs show please wait or else show the cards */}
                        {this.state.isLoading ?
                            <div id="trainersInfo" className="text-danger"></div>
                            :
                            this.state.trainers.map((trainer, i) => (
                                // is created when the trainer is added and has the key things
                                <TrainerCard
                                    key={i}
                                    id={trainer._id}
                                    userId={trainer._id}
                                    name={trainer.name}
                                    updateClick={this.createInputs}
                                    degree={trainer.degree}
                                    updateClick={this.createInputs}
                                    aboutme={trainer.aboutme}
                                    updateClick={this.createInputs}
                                    phone={trainer.phone}
                                    updateClick={this.createInputs}
                                    password={trainer.password}
                                    updateClick={this.createInputs}
                                    doDeleteTrainer={this.doDeleteTrainer}
                                    doUpdateTrainers={this.doUpdateTrainers}
                                />
                            ))
                        }
                    </div>
                    <div className="text-center mt-3"> <h3 className="text-danger">View My Users</h3>
                        <AdminAccessButton />
                    </div>
                </div>

            </>
        )
    }
}
export default AdminView