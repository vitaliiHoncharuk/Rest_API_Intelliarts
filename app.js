const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRouter = require("./routes/api");

mongoose.connect("mongodb://localhost:27017/Souvenir_Shop", {useNewUrlParser: true});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.use('/api', apiRouter);

app.use((err, req, res) => {
    console.log(err);
    res.end("Error!")
});

app.use('*', (req, res) => {
    res.status(404)
});

app.listen(3000, () => {
    console.log("Listening...3000");
});



