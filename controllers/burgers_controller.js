var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');
// console.log("burgers_controller line 4") //console.log used for testing
router.get('/', function(req, res) {
    res.redirect('/burgers')
});
// console.log("burger_controller line 8"); //console.log used for testing
router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = { burgers: data };

        // console.log("burger_controller line 13", hbsObject);

        res.render('index', hbsObject);
    });
    // console.log("burger_controller line 17"); //console.log used for testing
});

router.post('/burgers/create', function(req, res) {
    burgers.create(['burger_name'], [req.body.b_name], function(data) {
        // console.log("burgers_controller line 22"); //console.log used for testing
        // console.log(data);
        res.redirect('/burgers')
    });
});
// console.log(burgers_controller line 27);
router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log("burgers_controller.js", 'condition', condition);

    burgers.update({ 'devoured': req.body.devoured }, condition, function(data) {
        // console.log(this.condition); //console.log used for testing
        // console.log(3 + 5); //console.log used for testing
        res.redirect('/burgers');
    });
});
// console.log("burger_controller line39"); //console.log used for testing
// console.log(this.router); //console.log used for testing *undefined
// console.log(router); //console.log used for testing *undefined
module.exports = router;