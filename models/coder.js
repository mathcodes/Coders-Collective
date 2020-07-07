var orm = require("../config/orm.js");

var coders = {
    all: function(cb) {
        orm.all("coders", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("coders", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("coders", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("coders", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = coders;