const mongoose = require('mongoose');
const admin = mongoose.model('admin' , {
    name : {
        type : String 
    },
    email : {
        type : String 
    },
    password : {
        type : String
    }
})

module.exports = admin ;