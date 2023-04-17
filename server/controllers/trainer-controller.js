// 3 requires
const trainerInfo = require("../models/trainersInfo"),
    adminInfo = require("../models/admin.model"),
    userInfo = require("../models/userInfo")
// App utilizes a controller object that handle requests and responses
// CREATE
adminlogIn = (req, res) => {
    let { name, password } = req.body
    adminInfo.find({ name: name, password: password }).then((data, err) => {
        console.log(data.name)
        if (err) {
            console.log(`Server err ${err}`);
        } 
        if (data.length === 0) {
            res.send({ message: "We're Sorry, you do not have account!" })
        } else {
            res.send({ message: `Welcome ${name}`, admins: data, authenticated: true })
        }
    })
}
// UPDATE
getTrainerById = (req, res) => {
    // viewing all the users
    trainerInfo.findById({ _id: req.params.id }).then((userStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            // if found then send me the information
            res.send({ users: userStuff })
        }
    }).catch(err => res.status(500).json(err))
}
updateTrainers = (req, res) => {
    // finding by the id and setting the information
    let { name, phone, password, degree, aboutme, id } = req.body
    trainerInfo.findByIdAndUpdate({ _id: id }, { $set: { name: name, phone: phone, password: password, degree: degree, aboutme: aboutme } }).then((result, err) => {
        if (err) {
            console.log(`Error has occurred ${err}`);
        } else {
            trainerInfo.findById({ _id: req.body.id }).then((singleChange, err) => {
                // updates the user and this message pops up
                if (err) {
                    console.log(`Error has occurred ${err}`);
                } else {
                    res.send({ message: `Thank you for updating your information, ${singleChange.name}`, trainers: singleChange })
                }
            })
        }
    }) // find by the id that mongo creates and compare the information the user types in with the database information
        .catch(err => res.status(500).json(err))
}
deleteTrainer = (req, res) => {
    //  gets the id from the front end being passed through after the confirm button is pressed
    trainerInfo.findByIdAndDelete({ _id: req.params.id }).then((trainersCurr, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            if (trainersCurr.length === 0) {
                res.send({ message: "Sorry we currently have no trainers, Time to find some!!" })
            } else {
                res.send({ trainers: trainersCurr })
            }
        }
    }).catch(err => res.status(500).json(err))
}
// CREATE
createTrainer = (req, res) => {
    // Create new user
    let newTrainer = new trainerInfo(req.body);
    trainerInfo.find({ name: req.body.name, phone: req.body.phone, password: req.body.password, aboutme: req.body.aboutme, phone: req.body.phone, id: req.body.id }).then((trianerStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            // checks the trianerStuff to make sure the user does not already exists.
            if (trianerStuff.length === 0) {
                newTrainer.save().then((savedtrainer, err) => {
                    if (err) {
                        console.log(`Server err ${err}`);
                    } else {
                        res.send({ message: `${savedtrainer.name}`, trainers: savedtrainer })
                    }
                })
            } else {
                res.send({ message: "Sorry this user already exists." })
            }
        }
    }).catch(err => res.status(500).json(err))
}
trainerlogIn = (req, res) => {
    // captures the users input
    let { name, password } = req.body
    trainerInfo.find({ name: name, password: password }).then((data, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        }
        if (data.length === 0) {
            res.send({ message: "We're Sorry, you do not have account!" })
        } else {
            res.send({ message: `Hello, ${name}`, trainers: data, authenticated: true })
        }
    })
        // find by the id that mongo creates and compare the information the user types in with the database information
        .catch(err => res.status(500).json(err))
}
getAllTrainers = (req, res) => {
    // getting all the available trainers from the backend
    trainerInfo.find().then((trainerStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } if (trainerStuff.length === 0) {
            // sends this message to the front end and shows none are in the database
            res.send({ message: "Sorry there are NO trainers available!!", trainers: trainerStuff })
        } else {
            res.send({ trainers: trainerStuff, message: "Here are our trainers." })
        }
    }).catch(err => res.status(500).json(err))
}
// READ
viewAllTrainers = (req, res) => {
    // viewing all the trainers
    trainerInfo.find().then((trainerStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } if (trainerStuff.length === 0) {
            // sends this message to the front end and shows none are in the database
            res.send({ trainers: trainerStuff, message: "Sorry there are not any trainers available!!" })
        } else {
            res.send({ trainers: trainerStuff, message: "Here are our trainers." })
        }
    }).catch(err => res.status(500).json(err))
}
// READ
viewAllUsers = (req, res) => {
    // viewing all the users
    userInfo.find().then((userStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } if (userStuff.length === 0) {
            // sends this message to the front end and shows none are in the database
            res.send({ message: "Sorry there are not any users available!!", users: userStuff })
        } else {
            res.send({ users: userStuff, message: "Here are our users." })
        }
    }).catch(err => res.status(500).json(err))
}
// DELETE
deleteUser = (req, res) => {
    //  gets the id from the front end being passed through after the confirm button is pressed
    userInfo.findByIdAndDelete({ _id: req.params.id }).then((userCurr, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            if (userCurr.length === 0) {
                res.send({ message: "Sorry we currently have no user, Time to find some!!" })
            } else {
                res.send({ users: userCurr, message: "Are you sure you want to delete?" })
            }
        }
    }).catch(err => res.status(500).json(err))
}
getTrainerById = (req, res) => {
    // viewing all the trainers
    trainerInfo.findById({ _id: req.params.id }).then((trainerStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            // if found then send me the information
            res.send({ users: trainerStuff })
        }
    }).catch(err => res.status(500).json(err))
}
//    1 module exports
module.exports = {
    createTrainer,
    trainerlogIn,
    deleteTrainer,
    getAllTrainers,
    viewAllTrainers,
    adminlogIn,
    viewAllUsers,
    deleteUser,
    updateTrainers,
    getTrainerById
}


