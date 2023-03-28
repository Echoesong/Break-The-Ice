const express = require('express');
const router = express.Router();

const icebreakerCtrl = require('../controllers/icebreakers')

router.get('/new', function(req, res){
    res.send('hitting new')
})




module.exports = router