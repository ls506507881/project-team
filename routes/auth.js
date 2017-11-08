var express = require('express');
var router = express.Router();

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var JirenguStrategy = require('passport-jirengu').Strategy;

passport.serializeUser(function(user,done){
    console.log('---serializeUser---')
    console.log(user);
    done(null,user);
});

passport.deserializeUser(function(obj,done){
    console.log('---deserializeUser---')
    done(null,obj);
})

passport.use(new JirenguStrategy({
    clientID: '7c66a265d5476655fcdb24adcc23133445d166565fc43ef89ee1cc3d0c6cf40b',
    tokenURL: 'http://user.jirengu.com/oauth/token',
    clientSecret: 'afc796e5fa1b8e4448c0324c9e97b52719c4b87edbdde3aa375c4f8141be8ddb',
    callbackURL: "http://note.ruoyu.site/auth/jirengu/callback"},
    function(accessToken, refreshToken, profile, done) {
      done(null, profile)
    }));

/* GET auth . */
router.get('/jirengu',
passport.authenticate('jirengu'));

router.get('/jirengu/callback',
passport.authenticate('jirengu', { failureRedirect: '/' }),
function(req, res) {
  console.log('success......')
  console.log(req.user);
  req.session.user = {
    id: req.user._json.uid,
    username: req.user._json.name,
    avatar: req.user._json.avatar,
    provider: req.user.provider
  };
  res.redirect('/');
});


module.exports = router;