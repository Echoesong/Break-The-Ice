const Icebreaker = require('../models/Icebreaker')

module.exports = {
    new: newIcebreaker

}

// functions go below

function newIcebreaker(req, res){
    res.render('icebreakers/new', {title: 'Add Icebreaker'})
}
