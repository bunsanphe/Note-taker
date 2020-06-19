const router = require("express").Router();
const path = require("path");

router.get("/", (request, response) => {
    response.sendFile( path.join(__dirname, '../views/index.html') );
});

router.get("/notes", (request, response) => {
    response.sendFile( path.join(__dirname, '../views/notes.html') );
});

router.get("*", (request, response) => {
    response.sendFile( path.join(__dirname, '../views/index.html') );
});

module.exports = router;