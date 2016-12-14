/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose");
module.exports = function (app) {
    function rmGoods(req,res,next) {
        res.send([]);
    };

    app.get('/updateGoods',rmGoods)
};