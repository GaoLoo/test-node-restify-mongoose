/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose");
var goodsModel = mongoose.model('goods');
module.exports = function (app) {
    function getGoodsList(req,res,next) {
        goodsModel.find({}).exec().then(function (data) {
            console.log(data);
            res.send(data);
        })

    }
    app.get('/getGoodsList',getGoodsList);

};