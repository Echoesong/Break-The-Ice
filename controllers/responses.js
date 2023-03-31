const Icebreaker = require('../models/Icebreaker')

module.exports = {
    create, 
    edit, 
    update,
    delete: destroy
}

function create(req, res){
    Icebreaker.findById(req.params.id)
    .then( function(icebreaker){
        icebreaker.responses.push(req.body)
        icebreaker.responseCount++
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

function edit(req, res){
    let foundResponse, foundIcebreaker

    Icebreaker.findOne({'responses._id': req.params.id})
    .then( function(icebreaker) {
        foundIcebreaker = icebreaker
        return foundResponse = icebreaker.responses.id(req.params.id)
    })
    .then( function() {
        res.render('responses/edit', {
            title: "Edit Response", 
            response: foundResponse, 
            icebreaker: foundIcebreaker
        })
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}

function update(req, res){
    let foundIcebreaker

    Icebreaker.findOne({'responses._id': req.params.id})
    .then( function(icebreaker) {
        return foundIcebreaker = icebreaker
    })
    .then( function() {
        return foundIcebreaker.responses.remove(req.params.id)
    })
    .then( function() {
        foundIcebreaker.responses.push(req.body)
        return foundIcebreaker.save()
    })
    .then( function() {
        res.redirect(`/icebreakers/${foundIcebreaker._id}`)
    })
    .catch(function (err) {
        console.log(err)
        res.redirect('/')
    })
}

function destroy(req, res){
    let foundIcebreaker

    Icebreaker.findOne({'responses._id': req.params.id})
    .then( function(icebreaker) {
        return foundIcebreaker = icebreaker
    })
    .then( function() {
        foundIcebreaker.responseCount--
        return foundIcebreaker.responses.remove(req.params.id)
    })
    .then( function(){
        return foundIcebreaker.save()
    })
    .then( function() {
        return res.redirect(`/icebreakers/${foundIcebreaker._id}`)
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/icebreakers')
    })
}