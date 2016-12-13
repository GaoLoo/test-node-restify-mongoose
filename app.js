var restify = require("restify"),
    mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    app = restify.createServer();
    dataUrl = 'mongodb://localhost:27017/shop'; // 数据库地址
mongoose.connect(dataUrl);  // 链接数据库

app.listen('3000', '127.0.0.1', function(){ // 部署上服务器,只监听端口,不设置ip
  console.log( app.name, app.url);
});
require('./config/router')(app);


