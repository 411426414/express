var express = require('express')
// 引用路由模块
var routes = require('./Routes/index')
// 引用path模块
var path = require('path')
// 引用session模块
var session = require('express-session')
// 引用body-parser模块
var bodyParser = require('body-parser')

// 生成express对象
var app = express()


// __dirname：当前脚本路径，join：拼接路径
app.set('views', path.join(__dirname, 'views'));
// 引用ejs模块，并使用读取方法
// require('ejs').__express === require('ejs').readerFile
app.engine('html', require('ejs').__express)




// 交由路由处理
app.use('/', routes)


// 监听3000端口
app.listen(3000);