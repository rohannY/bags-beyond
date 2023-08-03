const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please enter product name"],
    },
    price:{
        type:Number,
        required : [true, "Please enter price"],
    },
    category:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:[String],
        required:true,
    },
});

module.exports = mongoose.model("Product", productSchema);
