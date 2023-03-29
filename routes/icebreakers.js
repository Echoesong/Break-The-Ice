const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

const icebreakersCtrl = require('../controllers/icebreakers')

router.get('/new', icebreakersCtrl.new)

router.get('/', icebreakersCtrl.index)

router.post('/', icebreakersCtrl.create)

// make show page //

// Route to render Update view
router.get('/:id/edit', icebreakersCtrl.edit)

//Route for show //
router.get('/:id', icebreakersCtrl.show)



// Route to update specific Icebreaker
router.put('/:id', icebreakersCtrl.update)

router.delete('/:id', icebreakersCtrl.delete)

module.exports = router