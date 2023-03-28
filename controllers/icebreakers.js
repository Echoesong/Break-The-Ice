const Icebreaker = require('../models/Icebreaker')

module.exports = {
    new: newIcebreaker,
    index

}

// functions go below

function newIcebreaker(req, res){
    res.render('icebreakers/new', {title: 'Add Icebreaker'})
}

function index(req, res) {
    res.render('icebreakers/index', { title: 'All Icebreakers'})
}
