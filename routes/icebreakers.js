const express = require('express');
const router = express.Router();

const icebreakersCtrl = require('../controllers/icebreakers')

router.get('/new', icebreakersCtrl.new)

router.get('/', icebreakersCtrl.index)

router.post('/', icebreakersCtrl.create)

router.get('/:id/edit', icebreakersCtrl.edit)

router.get('/:id', icebreakersCtrl.show)

router.put('/:id', icebreakersCtrl.update)

router.delete('/:id', icebreakersCtrl.delete)

module.exports = router