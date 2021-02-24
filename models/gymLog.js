const mongoose = require("mongoose")

const Schema = mongoose.Schema

const gymLogSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },

    exercises: [
        {
            type: {type: String}, 
            name: {type: String}, 
            duration: {type: Number},
            distance: {type: Number},
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number}, 
        }
    ]
})

const Gymlog = mongoose.model("gym-log", gymLogSchema)

module.exports = Gymlog