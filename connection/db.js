const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://hrusikeshviroot:hrusikesh@cluster0.ht3h65d.mongodb.net/nem-2")

module.exports={connection}