/**
 * Created by gao on 2016/12/14.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var shoppingScheme = new Schema({
    uid:String,
    goods:Array
});
mongoose.model('shoppingCart',shoppingScheme);