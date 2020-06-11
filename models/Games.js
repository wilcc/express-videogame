const mongoose = require('mongoose')

const ExpressVideoGamesSchema = new mongoose.Schema({
    name:{type:String, unique:true, lowercare:true, required:true},
    description:{type:String, required:true},
    released:String,
    playtime:Number,
    secret:{type:String,required:true},
    timestamp:{type: Date, default: Date.now},
})

module.exports= mongoose.model('videogame',ExpressVideoGamesSchema)


// name - make unique, lowercase, and required, string
// description - string, required
// released - string,
// playtime - number in minutes
// secret - string, required
// timestamp - date, default to the current date