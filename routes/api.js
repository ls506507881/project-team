var express = require('express');
var router = express.Router();
var Note = require('../model/note')

//   1. 获取所有 note:GET  /api/notes   req:{}    res:{status: 0,data:[{},{}]} {status: 1,
//   errorMsg: '失败的原因'}
//   2. 创建一个 note: POST: /api/notes/add  req:{note:'hello world'} res:{status: 0} {status: 1,
//   errorMsg: '失败的原因'}
//   3. 修改一个 note: POST: /api/notes/edit  req:{note:'new note',id: 100}
//   4. 删除一个 note: POST: /api/notes/delete req:{id:100}

/* GET users listing. */
router.get('/notes', function(req, res, next) {
  var data = note.getAll()
  res.send({status:0,data:data})
router.post('/notes/add', function(req, res, next) {
  var note = req.body.note;
  console.log('add...',note)
});
router.post('/notes/edit', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/notes/delete', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
