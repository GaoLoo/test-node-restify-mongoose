/**
 * Created by gao on 2016/12/14.
 */
/**
 * Created by gao on 2016/12/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var userScheme = new Schema({
    name:String,
    age:Number
});
mongoose.model('user',userScheme);