let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productsSchema = new Schema({
    date : {
        type : Date,
        max : Date.now(),
        required : true
    },
    price : {
       type : Number,
        min : 0.1,
        required : true
    },
    currency : {
       type : String,
        minlength : 2,
        maxlength : 3,
        required : true,
        trim : true,
    },
    item : {
        type : String,
        maxlength : 50,
        required : true
    },
    dateTime : Number
});

module.exports = mongoose.model("Product", productsSchema);
