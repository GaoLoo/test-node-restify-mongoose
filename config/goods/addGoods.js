/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose"),
    Goods= mongoose.model('goods');
module.exports = function (app) {
    function addGoods(req,res,next) {
        var goodsEntity = new Goods({
            name:"midea-A129",
            price:1200,
            quantity:1,
            imgUrl:'logo.jpg',
            brand:'midea'
        });
        goodsEntity.save(function (err) {
            if(err) console.log(err);
            res.send({"errCode":0})
        });
    }
    app.get('/shopping/addGoods',addGoods);
};