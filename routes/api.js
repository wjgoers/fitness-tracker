const router = require("express").Router();
const Gymlog = require("../models/gymLog.js");

router.post("/api/workouts", (req, res) => {
  Gymlog.create({}).then((data) => {
    res.json(data);
  });
});

router.get("/api/workouts", (req, res) => {
  Gymlog.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]).then((data) => {
    res.json(data);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  Gymlog.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  ).then((data) => {
    res.json(data);
  });
});

router.get("/api/workouts/range", (req, res) => {
    Gymlog.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ])
      .sort({_id: -1})
      .limit(7).then((data) => {
          res.json(data);
      })
})

module.exports = router;
