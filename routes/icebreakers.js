const express = require('express');
const router = express.Router();

const icebreakersCtrl = require('../controllers/icebreakers')

router.get('/new', icebreakersCtrl.new)

router.get('/', icebreakersCtrl.index)


module.exports = router