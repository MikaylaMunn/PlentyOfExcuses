// Requirements of what I need to run this program
const express = require('express'),
    // this is from my controller file
    //  App includes at least one post and five get routes (/:dynamic is one route)
    // separate boilerplate, routing
    UsrCtrl = require('../controllers/noexcuse-controller.js'),
    router = express.Router();
    // All routes are clearly defined at sensibly named URLs
    // A post route is used when a user creates an account
// to register on the website
router.post('/api/register', UsrCtrl.createUser)
// so the user can login back into the website
router.post(`/api/logIn`, UsrCtrl.logIn)
router.get ('/api/user/:id', UsrCtrl.getUserById)
router.put ('/api/userInfo', UsrCtrl.updateThisUser)
router.delete('/api/deleteUserInfo/:id', UsrCtrl.deleteTheUserById)





// exports this to be used on my index.js
module.exports = router