/**
 * Created by gao on 2016/12/13.
 */
module.exports = function (app) {
    app.get('/getGoodsList',function (req,res,next) {
        var a = require('./getGoodList')(123);
        res.send(a);
    });
    app.get('/addGoods',function (req,res,next) {
        equire('./addGoods')();
    });


};