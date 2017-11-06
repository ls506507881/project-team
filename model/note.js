var path = require('path')
var Sequelize = require('sequelize');  

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  // 仅 SQLite 适用
  storage: path.join(__dirname,'../database/database.sqlite') 
});
/*测试note.js是否成功
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
*/

// 1 hello 1111111 2344124

//定义一个表结构
var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  }
});

/*
//假设这个表不存在，就去创建他;
//如果存在，什么也不管。
Note.sync().then(function(){
  //创建一条数据
  Note.create({text: 'hello world'})
}).then(function(){
  // 去查找，查找到展示数据
  Note.findAll({raw:true}).then(function(notes){
    console.log(notes)
  })
})
*/


/*
//raw:true 为原始数据;where:{id:2}查找id为2的数据
  Note.findAll({raw:true,where:{id:2}}).then(function(notes){
  console.log(notes)
})
*/

module.exports.Note=Note;