/**
 * Created by gao on 2016/12/13.
 */
var mongoose = require("mongoose"),
    User = mongoose.model('user'),
    shoppingCart = mongoose.model('shoppingCart');

module.exports = function (app) {
    var uid = '';

    /**
     * @function
     * @description
     * @param req
     * @param res
     * @param next
     */
    function addUser(req,res,next) {
        var useEntity = new User({
            name:"admin",
            password:'123',
            age:"20"
        });
        useEntity.save(function (err,data) {
            if(err) console.log(err);
            uid = data._id;
            res.send(data);
            next();
        });
    }
    function addShoppingCart(req,res,next) {
        var shoppingCartEntity = new shoppingCart({
            uid:uid,
            goods:Array
        });
        shoppingCartEntity.save(function (err,data) {
            if(err) console.log(err)
        });

    }
    app.get('/user/addUser',addUser,addShoppingCart);
};