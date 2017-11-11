var express = require('express');
var router = express.Router();

// 引入passport,该模块专门处理oauth 2 认证逻辑
var passport = require('passport');
//自己写的passport-github模块，是在passport的基础上的封装，有具体URL，具体跳转
var GitHubStrategy = require('passport-github').Strategy;
// var JirenguStrategy = require('passport-jirengu').Strategy;

//npm.js查看passport,所有的模块都在npm里面
//用户注册传递的数据，生成一个session，放到内存中
passport.serializeUser(function(user,done){
    console.log('---serializeUser---')
    console.log(user);
    done(null,user);
});
//从内存中拿出来解析，知道用户
passport.deserializeUser(function(obj,done){
    console.log('---deserializeUser---')
    console.log(obj)
    done(null,obj);
})

// 做一个配置，但没有生效
//向第三方登录入口发送一个请求，把ID和Secret都传递给第三方，就知道是哪个应用发的请求
passport.use(new GitHubStrategy({
  clientID: '98bac7185eddd767a8fa',
  clientSecret: '06b5f02a19b432ddf7907ee1bdb1a5185b67e390',
  //调用callback回来
  // callbackURL: "http://note.ruoyu.site/auth/github/callback"
  callbackURL: "http://localhost:3000/auth/github/callback"
},
  //得到用户信息
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    done(null, profile);
  }));

/* GET auth . */
  // 这里才是第三方入口
  // 当点击auth GitHub登录的时候，调用passport（我点的）
  router.get('/github',
  passport.authenticate('github'));

// 当有回调，得到真正的第三方登录信息（第三方返回的）
router.get('/github/callback',
passport.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {
  req.session.user = {
    id: req.user.id,
    username: req.user.displayName || req.user.username,
    avatar: req.user._json.avatar_url,
    provider: req.user.provider
  };
  res.redirect('/');
});
//注销
router.get('/logout',function(req,res){
  req.session.destroy()
  //销毁session
  res.redirect('/')
  //跳转到首页
})

module.exports = router;