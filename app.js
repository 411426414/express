var express = require('express')
// 引用路由模块
var routes = require('./Routes/index')
// 引用path模块
var path = require('path')
// 引用session模块
var session = require('express-session')


// 生成express对象
var app = express()




// 交由路由处理
app.use('/', routes)


// 监听3000端口
app.listen(3000);