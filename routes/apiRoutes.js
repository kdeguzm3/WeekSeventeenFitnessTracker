const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) =>{
    Workout.find()
        .then((workouts) => {
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
            console.log(err);
        })
})

router.get("/workouts/range", (req, res) => {
    Workout.find({})
    .then(docs => {
        res.json(docs);
    })
    .catch((err) => {
        res.json(err);
        console.log(err);
    })
})

router.post("/workouts", ({body}, res) =>{
    Workout.create(body)
    .then(docs => {
        res.json(docs);
    })
    .catch((err) => {
        res.json(err);
        console.log(err);
    })
})

router.put("/workouts/:id", ({ body, params: {id} }, res) => {
    Workout.findByIdAndUpdate(id, {$push: {exercises: body}},
        )
        .then(docs => {
            res.json(docs);
        })
        .catch((err) => {
            res.json(err);
            console.log(err);
        });
});




module.exports = router;