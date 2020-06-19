const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (request, response) => {

    store.getNotes().then( (notes) => {
        response.json(notes)
    })

})


router.post("/notes", (request, response) => {
   store.getNotes().then( (notes) => {

   })
    
    store.addNotes(request.body).then( (note) => {
        response.json(note);
    })
    .catch( (err) => {
        response.status(500).json(err);
    console.log ("CREATE notes")})

    const notes = JSON.parase (data)


})


router.delete("/notes/:id", (request, response) => {
    store.deleteNotes(req.params.id).then () => {response.json( {ok: true} )
    console.log(request.params.id)
    console.log( "DELETE notes")
    }
})

module.exports = router;