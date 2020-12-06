var express = require('express');
// 路由
var router = express.Router();

router.get('/', function (req, res) {
  res.send('hello express');
})


// 公开接口
module.exports = router;