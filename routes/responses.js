const express = require('express');
const router = express.Router();

const responsesCtrl = require('../controllers/responses')

router.post('/icebreakers/:id/responses', responsesCtrl.create)

module.exports = router

// /icebreakers/<%=icebreaker._id%>/responses"