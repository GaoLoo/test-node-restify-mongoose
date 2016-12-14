/**
 * Created by gao on 2016/12/13.
 */
var restify = require("restify");

module.exports = function (app) {

    require('./shoppingCart/rmGoods')(app);
    require('./shoppingCart/updataGoods')(app);
    require('./shoppingCart/getGoods')(app);
    require('./shoppingCart/addGoods')(app); //修改商品
    require('./getGoodsList')(app); // 获取商品列表
    require('./user/addUser')(app);
    /**
     * @description 图片目录
     */
    app.get(/\/?.(html|css|js|png|jpg|gif|font)/, restify.serveStatic({
        directory: './images',
        default: 'index.html'
    }));

    /**
     * @description 静态目录
     */
    app.get("/", restify.serveStatic({
        directory: './images',
        default: 'index.html'
    }));

};