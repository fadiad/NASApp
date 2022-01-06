const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Planets = new Schema({
    title: String,
    href: String,
})

const Planet = mongoose.model('planet', Planets)
module.exports = Planet


