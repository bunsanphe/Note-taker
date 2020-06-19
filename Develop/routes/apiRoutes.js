const router = require("express").Router();
const path = require("path");
const { fstat } = require("fs");

router.get("/notes", (request, response) => {
    //tbd

    console.log("READ notes")

    fs.readFile( path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        console.log(data)
        response.json( JSON.parase(data) )
        
    } )

})

router.post("/notes", (request, response) => {
    //tbd

    console.log ("CREATE notes")

    const notes = []

    // fs.writeFile(‘<fileName>’,<contenet>,callbackFunction)


})

router.delete("/notes/:id", (request, response) => {
    //tbd

    console.log( "DELETE notes")
})

module.exports = router;