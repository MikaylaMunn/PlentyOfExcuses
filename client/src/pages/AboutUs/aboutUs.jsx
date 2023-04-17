// imported from react
import React, { Component } from 'react'
import MyCard from "../../components/MyCard/MyCard"
import './aboutUs.css'
import team from '../../assets/basketballTeam.jpeg'
import api from '../../api'

class Aboutus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainers: [],
            isLoading: false,
        }
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount = () => {
        this.setState({ isLoading: true })
        api.getAllTrainers().then(data => {
            if (data.data.trainers.length === 0) {
                let trainersInfo = document.getElementById('trainersInfo')
                trainersInfo.innerHTML =`<h3>${data.data.message}</h3>`
            } else {
                this.setState({
                    trainers: data.data.trainers,
                    isLoading: false,
                })
            }
        })
    }
    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <img src={team} alt="Basketball Team" className="manExercising h-50 w-50  rounded-circle" />
                    <h1 className="text-danger title">About Us</h1>
                    <h6 className="info text-danger">Just in case, you wanted to know what we are about. We are a family focusing on encouraging, supporting, and assisting one another to be the best versions for ourselves. Some of our staff would like to introduce themselves. Hope they inspire you just like they did us.</h6>
                </div>

                <div className="ui four cards text-center justify-content-center">
                    {this.state.isLoading ?
                            <div id="trainersInfo" className="text-danger"></div>
                        :
                        this.state.trainers.map((trainer, i) => (
                            <MyCard
                                key={i}
                                id={trainer._id}
                                name={trainer.name}
                                degree={trainer.degree}
                                aboutme={trainer.aboutme}
                                phone={trainer.phone}
                            />
                        ))
                    }
                </div>
            </>
        )
    }
}

// export to be used on the App 
export default Aboutus

