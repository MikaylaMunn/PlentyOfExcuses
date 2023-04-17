import React, { Component } from "react"
import { Table } from "react-bootstrap"

class MediumExercise extends Component {
    render() {
        return (
            <>
            <h1 className="text-danger"> Here are your Exercises for Level 2</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="text-danger">Type</th>
                            <th className="text-danger">Reps</th>
                            <th className="text-danger">Set</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Squats</td>
                            <td>20 Reps</td>
                            <td>5 Sets</td>
                        </tr>
                        <tr>
                            <td>Raised Leg-Push</td>
                            <td>10 Reps per Leg</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>Squats</td>
                            <td>20 Reps</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>Plank</td>
                            <td>10 Seconds</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>One Leg Raised Plank</td>
                            <td>10 Seconds</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>One Leg Raised Plank(other leg)</td>
                            <td>10 Seconds</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>Flutter Kicks</td>
                            <td>10 Reps</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>Leg Raises</td>
                            <td>10 Reps</td>
                            <td>5 sets</td>
                        </tr>
                        <tr>
                            <td>Raised Leg Hold</td>
                            <td>10 Seconds</td>
                            <td>5 sets</td>
                        </tr>
                    </tbody>
                </Table>
            </>

        )
    }
}
export default MediumExercise