const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (request, response) => {

    store.getNotes().then( (notes) => {
        response.json(notes)
    })
    .catch( (err) => response.status(500).json(err) );

})


router.post("/notes", (request, response) => {
    
    store.addNotes(request.body).then( (note) => {
        response.json(note);
    })
    .catch( (err) => response.status(500).json(err)) ;
    
})


router.delete("/notes/:id", (request, response) => {
    store.deleteNotes(request.params.id).then( () => {
        response.json( {ok: true} )
    })
    .catch( (err) => response.status(500).json(err) );
});

module.exports = router;