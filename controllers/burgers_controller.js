//router file with all unique routes
const express = require('express');
let router = express.Router();

//burger model
let burger = require('../models/burger.js');

// Routes 
//get data route
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//post new data route
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    [
      "burger_name", "devoured"
    ],
    [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      // console.log(result);
      res.json({ id: result.insertedID });
    }
  )
})

//put new data route
router.put("/api/burgers/:id", function(req,res){
  var condition= "id = "+req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
  {
    devoured: req.body.devoured
  },condition,function(result){
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;