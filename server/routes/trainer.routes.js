// Requirements of what I need to run this program
// separate boilerplate, routing
const express = require('express'),
    // this is from my controller file 
    //  App includes at least one post and five get routes (/:dynamic is one route)
    TrainersCtrl = require('../controllers/trainer-controller.js'),
    trainer = express.Router();
trainer.post(`/api/trainerlogIn`, TrainersCtrl.trainerlogIn)
// All routes are clearly defined at sensibly named URLs
trainer.post(`/api/registerTrainer`, TrainersCtrl.createTrainer)
//  so the user can go to the about us to view the trainers
// 3 GETS
trainer.get(`/api/aboutus`, TrainersCtrl.getAllTrainers)
trainer.get('/api/trainer/:id', TrainersCtrl.getTrainerById)
trainer.get(`/api/adminViewTrainers`, TrainersCtrl.viewAllTrainers)
trainer.get(`/api/adminViewUsers`, TrainersCtrl.viewAllUsers)
trainer.post(`/api/adminLogin`, TrainersCtrl.adminlogIn)
trainer.delete('/api/deleteTrainer/:id', TrainersCtrl.deleteTrainer)
trainer.delete('/api/deleteUser/:id', TrainersCtrl.deleteUser)
// getting the trainer information to update it
trainer.put('/api/trainerInfo', TrainersCtrl.updateTrainers)
// exports this to be used on my index.js
module.exports = trainer