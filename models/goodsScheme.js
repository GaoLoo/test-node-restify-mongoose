/**
 * Created by gao on 2016/12/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var goodsScheme = new Schema({
    name:String,
    price:Number,
    quantity:Number,
    imgUrl:String,
    brand:String
});
mongoose.model('goods',goodsScheme);