const mongoose = require("mongoose")

const Schema = mongoose.Schema

const gymLogSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },

    exercises: [
        {
            type: String, 
            name: String, 
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number, 
        }
    ]
})

const Gymlog = mongoose.model("gym-log", gymLogSchema)

module.exports = Gymlog