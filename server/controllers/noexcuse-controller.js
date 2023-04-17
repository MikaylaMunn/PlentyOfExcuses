// 1 require
const userInfo = require('../models/userInfo'),
    // App utilizes a controller object that handle requests and responses
    // this is for the register page, to create a new user to add to the page
    // CREATE
    createUser = (req, res) => {
        // Create new user
        let newUser = new userInfo(req.body);
        // finds the name, phone, and password if not then it creates it
        userInfo.find({ name: req.body.name, phone: req.body.phone, password: req.body.password }).then((userStuff, err) => {
            if (err) {
                console.log(`Server err ${err}`);
            } else {
                // checks the userStuff to make sure the user does not already exists.
                if (userStuff.length === 0) {
                    newUser.save().then((savedUser, err) => {
                        if (err) {
                            console.log(`Server err ${err}`);
                        } else {
                            res.send({ message: ` ${savedUser.name}`, users: savedUser, authenticated: true })
                        }
                    })
                } else {
                    res.send({ message: "Sorry this user already exists." })
                }
            }
        }).catch(err => res.status(500).json(err))
    }
logIn = (req, res) => {
    // captures the users input
    let { name, password } = req.body
    userInfo.find({ name: name, password: password }).then((data, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } if (data.length === 0) {
            res.send({ message: "We're Sorry, you do not have account!" })
        }
        else {
            res.send({ message: ` ${name}`, users: data, authenticated: true })
        }
    })
        // find by the id that mongo creates and compare the information the user types in with the database information
        .catch(err => res.status(500).json(err))
}
// UPDATE
updateUser = (req, res) => {
    // breaking it down to req.body
    let { name, phone, password, id } = req.body
    // finding it by the id and resetting the name, phone, password
    userInfo.findByIdAndUpdate({ _id: id }, { $set: { name: name, phone: phone, password: password } }).then((result, err) => {
        if (err) {
            console.log(`Error has occurred ${err}`);
        } else {
            // find the user
            // find it by id and then send this message through if the user change the information
            userInfo.findById({ _id: req.body.id }).then((singleChange, err) => {
                // updates the user and this message pops up
                if (err) {
                    console.log(`Error has occurred ${err}`);
                } else {
                    res.send({ message: `Thank you for updating your information, ${singleChange.name}`, users: singleChange })
                }
            })
        }
    }).catch(err => res.status(500).json(err))
}
getUserById = (req, res) => {
    // viewing all the users
    userInfo.findById({ _id: req.params.id }).then((userStuff, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            // if found then send me the information
            res.send({ users: userStuff })
        }
    }).catch(err => res.status(500).json(err))
}
deleteTheUserById = (req, res) => {
    //  gets the id from the front end being passed through after the confirm button is pressed
    userInfo.findByIdAndDelete({ _id: req.params.id }).then((userCurr, err) => {
        if (err) {
            console.log(`Server err ${err}`);
        } else {
            if (userCurr.length === 0) {
                res.send({ message: "Sorry we currently have no user, Time to find some!!" })
            } else {
                res.send({ users: userCurr, message: `Are you sure you want to delete, ${userCurr.name}` })
            }
        }
    }).catch(err => res.status(500).json(err))
}
updateThisUser = (req, res) => {
    // viewing all the users
    let { name, phone, password, id } = req.body
    // finding by the id and setting the name, phone, password
    userInfo.findByIdAndUpdate({ _id: id }, { $set: { name: name, phone: phone, password: password } }).then((result, err) => {
        if (err) {
            console.log(`Error has occurred ${err}`);
        } else {
            userInfo.findById({ _id: req.body.id }).then((singleChange, err) => {
                // updates the user and this message pops up
                if (err) {
                    console.log(`Error has occurred ${err}`);
                } else {
                    res.send({users: singleChange, authenticated: true })
                }
            })
        }
    }).catch(err => res.status(500).json(err))
}
// 1 module exports
module.exports = {
    logIn,
    createUser,
    updateUser,
    getUserById,
    updateThisUser,
    deleteTheUserById
}