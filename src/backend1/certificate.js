const mongoose = require('mongoose');

const certificate = mongoose.model('certificates' , {
    name : {
        type : String
    },
    thème : {
        type : String
    },
    date_début : {
        type : String
    },
    date_fin : {
        type : String
    }
})

module.exports = certificate ;
