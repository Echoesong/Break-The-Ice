const Icebreaker = require('../models/Icebreaker')

module.exports = {
    new: newIcebreaker,
    index,
    create,
    show

}

// functions go below

function newIcebreaker(req, res){
    res.render('icebreakers/new', {title: 'Add Icebreaker'})
}

function index(req, res) {
    Icebreaker.find({})
    .then(function(allIcebreakers) {
        res.render('icebreakers/index', { title: 'All Icebreakers', allIcebreakers})
    })
    .catch(function(err){
        console.log()
        res.render('/')
    })
}

function create(req, res){
    // What am I doing here?
    // Incoming request that has a data packet of the data
    // Take the incoming data, use it to populate the schema that we pull from the Model
    Icebreaker.create(req.body)
    .then(function (newIcebreaker){
        // Eventually, it would be ideal to route to '/icebreakers/${newIcebreaker._id}. For now route back to index
        console.log(newIcebreaker)
        res.redirect('/')
    })
    .catch(function (err){
        console.log(err)
        res.redirect('/')
    })
}

function show(req, res) {
    console.log(req.params)
    Icebreaker.findById(req.params.id)
    .then(function (icebreaker){
        // return foundIcebreaker = Icebreaker
        res.render('icebreakers/show', {
            title: "Icebreaker Details",
            icebreaker 
        })
    })
    .catch(function (err) {
        console.log(err)

        res.redirect('/')
    })
}
