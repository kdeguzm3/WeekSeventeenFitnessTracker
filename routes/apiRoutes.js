const router = require ( 'express' ).Router();

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

router.get ('/workouts', (req, res) => {
    db.Workout.find()
        .then (docs => res.json (docs))
})

module.exports = router;