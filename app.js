let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
let apiRouter = require("./routes/api");

mongoose.connect("mongodb://localhost:27017/Souvenir_Shop",{useNewUrlParser:true});

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));

app.use('/api',apiRouter);

app.use((err ,req , res, next) => {
    console.log(err);
    res.end("Error!")
});

app.listen(3000, ()=>{
    console.log("Listening...");
});



