const express = require('express');
const router = express.Router();

const responsesCtrl = require('../controllers/responses')

router.post('/icebreakers/:id/responses', responsesCtrl.create)

<<<<<<< HEAD
module.exports = router

// /icebreakers/<%=icebreaker._id%>/responses"
=======
router.get('/responses/:id/edit', responsesCtrl.edit)

router.put('/responses/:id', responsesCtrl.update)

router.delete('/responses/:id', responsesCtrl.delete)

module.exports = router
>>>>>>> 532e002e6852d079acb8c75ffd5c24686aea9aa6
