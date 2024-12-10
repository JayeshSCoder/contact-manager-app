const mongoose = require("mongoose")



const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add Name"]
    },
    email :{
        type : String,
        required : [true, "Please add the email"]
    },
    phone : {
        type : String,
        required : [true, "Please add Phone No."]
    }, 
},  {
    timestamps : true
    }
);



module.exports = mongoose.model("Contact", contactSchema);