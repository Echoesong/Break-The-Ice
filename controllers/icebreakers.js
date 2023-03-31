const Icebreaker = require('../models/Icebreaker')

module.exports = {
    new: newIcebreaker,
    index,
    create,
    show,
    edit,
    update,
    delete: destroy

}

// functions go below

function newIcebreaker(req, res){
    res.render('icebreakers/new', {title: 'Add an Icebreaker'})
}

function index(req, res) {
    Icebreaker.find({})
    .sort('topic')
    .then(function(allIcebreakers) {
        res.render('icebreakers/index', { title: 'All Icebreakers', allIcebreakers})
    })
    .catch(function(err){
        console.log()
        res.render('/')
    })
}

function create(req, res){
    Icebreaker.create(req.body)
    .then( function(newIcebreaker){
        newIcebreaker.responseCount=0
        return newIcebreaker.save()
    })
    .then(function (newIcebreaker){
        res.redirect(`/icebreakers/${newIcebreaker._id}`)
    })
    .catch(function (err){
        console.log(err)
        res.redirect('/')
    })
}

function show(req, res) {
    Icebreaker.findById(req.params.id)
    .then(function (icebreaker){
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

function edit(req, res){
    Icebreaker.findById(req.params.id)
    .then(function (icebreaker){
        res.render('icebreakers/edit', {
            title: "Edit Icebreaker",
            icebreaker 
        })
    })
    .catch(function (err) {
        console.log(err)
        res.redirect('/')
    })
}

function update(req, res){
    Icebreaker.findByIdAndUpdate(req.params.id, req.body)
    .then( function(icebreaker){
        return icebreaker.save()
    })
    .then( function (){
        res.redirect(`/icebreakers/${req.params.id}`)
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}

function destroy(req, res) {
    Icebreaker.findByIdAndDelete(req.params.id)
    .then(function(){
        return res.redirect('/icebreakers')
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}