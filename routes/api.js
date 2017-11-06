var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note;

//   1. 获取所有 note:GET  /api/notes   req:{}    res:{status: 0,data:[{},{}]} {status: 1,
//   errorMsg: '失败的原因'}
//   2. 创建一个 note: POST: /api/notes/add  req:{note:'hello world'} res:{status: 0} {status: 1,
//   errorMsg: '失败的原因'}
//   3. 修改一个 note: POST: /api/notes/edit  req:{note:'new note',id: 100}
//   4. 删除一个 note: POST: /api/notes/delete req:{id:100}

/* GET users listing. */
router.get('/notes', function(req, res, next) {
  console.log('/notes...')
  // var data = note.getAll()
  Note.findAll({raw:true}).then(function(notes){
    console.log(notes)
    res.send({status:0,data:notes})
  })
});
router.post('/notes/add', function(req, res, next) {
  var note = req.body.note;
  Note.create({text:note}).then(function(){
    res.send({status:0})
  }).catch(function(){
    res.send({status:1,errorMsg:'数据库出错'})
  })
  console.log('add...',note)
});
router.post('/notes/edit', function(req, res, next) {
  Note.update({text: req.body.note},{where:{id:req.body.id}}).then(function(){
    console.log(arguments)
    res.send({status:0})
  })
});

router.post('/notes/delete', function(req, res, next) {
  Note.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:0})
  })
});

module.exports = router;
