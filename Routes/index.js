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


router.post('/login', function (req, res) {
  // res.send(req.body.username);
  var session = req.session;
  // 第N次登录
  if (session.uniqueId) {
    // 交由专门的方法处理
    res.redirect('/redirects');
  } else {
    // 第一次登陆
    session.uniqueId = req.body.username;
    // 交由专门的方法处理
    res.redirect('/redirects');
  }
})


// 公开接口
module.exports = router;