const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}) );

app.use(express.static('public') );
app.use( "/api", apiRoutes);
app.use(htmlRoutes);


app.listen( PORT, () => {
    console.log(`Listening on PORT: ${PORT}` )
})
