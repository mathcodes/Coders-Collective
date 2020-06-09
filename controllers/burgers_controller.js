var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers')
});
console.log(0 + 8);
router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = { burgers: data };

        console.log("13");

        res.render('index', hbsObject);
    });
    console.log("line17");
});

router.post('/burgers/create', function(req, res) {
    burgers.create(['burger_name'], [req.body.b_name], function(data) {
        console.log("line22");
        console.log(this.data);
        res.redirect('/burgers')
    });
});
// console.log(burgers_controller line 27);
router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burgers.update({ 'devoured': req.body.devoured }, condition, function(data) {
        console.log(this.condition);
        console.log(3 + 5);
        res.redirect('/burgers');
    });
});
console.log("line22");
console.log(this.router);
module.exports = router;