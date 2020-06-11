
const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')
const gameRouter = require('./gameRoutes')




router.post('/enter',controller.enter)


module.exports=router
