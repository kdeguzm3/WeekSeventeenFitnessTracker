const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema (
    {
        day: { type: Date, default: Date.now },
        exercises: [
            {
                type: String,
                name: String,
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number
            }
        ]
    }
);



module.exports.Workout = mongoose.model ('Workouts', workoutSchema );