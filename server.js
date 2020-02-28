const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001

let app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, function() {
    console.log(`Application listening on ${PORT}`);
})