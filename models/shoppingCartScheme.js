/**
 * Created by gao on 2016/12/14.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var GoodsSchema = new Schema({
    goodId: {type: ObjectId, rel: 'goods'},
    qty: {type:Number, default: 0}
});
var shoppingScheme = new Schema({
    uid:{type:ObjectId, rel: 'user'},
    goods:[GoodsSchema],
});
mongoose.model('shoppingCart',shoppingScheme);