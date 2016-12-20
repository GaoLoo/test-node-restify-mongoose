var restify = require("restify"),
    mongoose = require("mongoose"),
    fs= require('fs'),
    Schema = mongoose.Schema,
    app = restify.createServer(),
    dataUrl = 'mongodb://localhost:27017/shop'; // 数据库地址
mongoose.Promise = global.Promise;
mongoose.connect(dataUrl);  // 链接数据库
app.listen('3000', '127.0.0.1', function(){ // 部署上服务器,只监听端口,不设置ip
  console.log( app.name, app.url);
});
app.use(restify.acceptParser(app.acceptable));
app.use(restify.authorizationParser());
app.use(restify.dateParser());
app.use(restify.queryParser());
app.use(restify.jsonp());
app.use(restify.gzipResponse());
app.use(restify.bodyParser({
    // uploadDir: '../tmp'
}));
fs.readdirSync('./models').forEach(function (file) {
    console.log(file);
    if (file.indexOf('.' >= 0) && file.substring(file.indexOf('.') + 1) === 'js') require('./models' + '/' + file);
});
require('./config/router')(app);

