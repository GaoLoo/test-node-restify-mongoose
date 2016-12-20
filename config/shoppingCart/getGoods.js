/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose"),
    shoppingCart = mongoose.model('shoppingCart'),
    goods = mongoose.model('goods'),
    Promise = require('bluebird');

module.exports = function (app) {
    var goodList = [];
    function getGoods(req,res,next) {
        var uid = req.params.uid;
        shoppingCart.findOne({'uid':uid})
            .exec(function (err,data) {
                if(err) console.log(err);
                if(data){
                    if(data.goods.length > 0){
                        var goodsList = [],
                            promiseArr = [];
                        for(var i = 0; i< data.goods.length; i++){
                            var item = goods.findById(data.goods[i].goodId).exec(function(e, o){
                                goodsList.push(o);
                            });
                            promiseArr.push(item);
                        }
                        Promise.all(promiseArr).then((a) =>  {
                            console.log(goodsList);
                            data = data.toObject();
                            data.goodsList = goodsList;
                            res.send(data);
                        });
                    }
                    // res.send(data);
                }
        })
    }
    app.get('/shopping/getGoods',getGoods)
};