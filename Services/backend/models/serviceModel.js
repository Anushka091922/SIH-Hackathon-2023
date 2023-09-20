const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    state: {
        type: String,
        // required: true
    },

    city: {
        type: String,
        // required: true
    },

    courts: {
        type: Array,
        required: true
    }

}, { timestamps: true }) 


// model export
module.exports = mongoose.model('Service', serviceSchema)