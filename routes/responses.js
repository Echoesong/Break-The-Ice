const express = require('express');
const router = express.Router();

const responsesCtrl = require('../controllers/responses')

router.post('/icebreakers/:id/responses', responsesCtrl.create)

router.get('/responses/:id/edit', responsesCtrl.edit)

router.delete('/responses/:id', responsesCtrl.delete)

module.exports = router