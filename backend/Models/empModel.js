const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Salary : {
        type : Number,
        required : true
    },
    Designation : {
        type : String,
        required : true
    }

}, {timestamps:true}
)
module.exports = mongoose.model("Employ", empSchema)