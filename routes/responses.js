const express = require('express');
const router = express.Router();

const responsesCtrl = require('../controllers/responses')

router.post('/icebreakers/:id/responses', responsesCtrl.create)

router.delete('/responses/:id', responsesCtrl.delete)

module.exports = router