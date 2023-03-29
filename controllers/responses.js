const Icebreaker = require('../models/Icebreaker')

module.exports = {
    create
}

function create(req, res){
    console.log("req params:", req.params)

    Icebreaker.findById(req.params.id)
    .then( function(icebreaker){
        console.log("req body:", req.body)
        icebreaker.answers.push(req.body)
        return icebreaker.save()
    })
    .then( function (icebreaker){
        res.redirect(`/icebreakers/${req.params.id}`)
    })
    .catch( function(err){
        console.log(err)
        res.redirect('/')
    })
}