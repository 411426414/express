var express = require('express');
// 路由
var router = express.Router();

router.get('/', function (req, res) {
  res.send('hello express');
})

router.get('/login', function (req, res) {
  // res.send('router page');
  // 渲染视图
  res.render('login');
});



// 公开接口
module.exports = router;