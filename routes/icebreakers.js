const express = require('express');
const router = express.Router();

const icebreakersCtrl = require('../controllers/icebreakers')

router.get('/new', icebreakersCtrl.new)

router.get('/', icebreakersCtrl.index)

router.post('/', icebreakersCtrl.create)


module.exports = router