const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')




router.get('/getallgames', controller.getallgames)

router.get('/getsinglegame/:name',controller.getsinglegame)


router.post('/creategame',controller.creategame)


router.put('/updategame/:name',controller.updategame);


router.delete('/deletegame/:name',controller.deletegame)

module.exports = router