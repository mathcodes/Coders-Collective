console.log("Starting:" + __filename);

console.log("3:" + __filename)
var express = require('express');
var router = express.Router();
var coders = require('../models/coder.js');
// console.log("coders_controller line 4") //console.log used for testing
router.get('/', function(req, res) {
    res.redirect('/coders')
});
// console.log("coder_controller line 8"); //console.log used for testing
router.get('/coders', function(req, res) {
    coders.all(function(data) {
        var hbsObject = { coders: data };

        // console.log("coder_controller line 13", hbsObject);

        res.render('index', hbsObject);
    });
    // console.log("coder_controller line 17"); //console.log used for testing
});

router.post('/coders/create', function(req, res) {
    coders.create(['coder_name'], [req.body.b_name], function(data) {
        // console.log("coders_controller line 22"); //console.log used for testing
        // console.log(data);
        res.redirect('/coders')
    });
    // console.log("'coder' /coders_controllers.js 38")
    // console.log("coder  /coders_controllers.js 39")
});


router.put('/coders/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    // console.log("37:" + __filename, condition)
    coders.update({ 'devoured': req.body.devoured }, condition, function(data) {
        res.redirect('/coders');
        // console.log("40:" + __filename, condition)
    });
});
// console.log("coder_controller line39"); //console.log used for testing
// console.log(this.router); //console.log used for testing *undefined
// console.log(router); //console.log used for testing *undefined
router.delete('/coders/delete/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    coders.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

// console.log("Ending:" + __filename);