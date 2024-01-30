/* import express */
const express = require('express')

/* import controller */
const usercontroller = require('../Controllers/userController')

/* create object for the router class router in express */
const router = new express.Router()

/* logic path foe resolving the request*/
    /* A) Register */

    router.post('/users/register',usercontroller.register)

    /* B) Login */

    router.post('/users/login',usercontroller.login)

/* last step  exporting this router to get in index.js */
module.exports = router 