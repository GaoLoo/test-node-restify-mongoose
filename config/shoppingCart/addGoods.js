/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose"),
    Goods= mongoose.model('goods'),
    shopingCart = mongoose.model('shoppingCart');

module.exports = function (app) {
    function addGoods(req,res,next) {
        let goodId = req.params.goodId,
            uid = req.params.uid;
        shopingCart.findOne({uid: uid}, (err, data) => {
            if(err){
                res.send(err);
                return next();
            }
            if(data){
                let hasGood = false;
                data.goods.forEach(function (good) {
                    if(good.goodId = goodId){
                        console.log(good,'good');
                        good.qty++;
                        hasGood = true;
                    }
                });

                if(!hasGood){
                    data.goods.push({'goodId':goodId,'qty':1});
                }else {
                    data.update({goods:data.goods},{$set:{goods:data.goods}},function (err,data) {
                        console.log(data)
                    })
                }
                console.log('2221',data.goods);
                data.goodId = goodId;
                data.save(function (err,o){
                    console.log('1111',o);
                    res.send(o);
                });
                
            } else {
                res.send('查找不到对应数据');
            }
        });
    }
    app.get('/shopping/addGoods',addGoods);
};