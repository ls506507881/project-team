var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.query)
  var data;
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user
    }
  }else{
    data = {
      isLogin: false
    }
  }
  console.log(data)
  res.render('index', data);
});
  // var data;
  // if(req.session.user){
  //   data = {
  //     isLogin: true,
  //     user: req.session.user
  //   }
  // }else{
  //   data = {
  //     isLogin: false
  //   }
  // }
  // setTimeout(function(){
    //登录状态
    // var loginData = {
    //   isLogin: true,
    //   user: {
    //     avatar: `<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    //     <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
    //     <g>
    //      <title>Layer 1</title>
    //      <polygon stroke-width="5" stroke="#000000" points="211,218.2159881591797 216.35684204101562,233.62693786621094 232.66888427734375,233.9593505859375 219.6675567626953,243.81625366210938 224.39210510253906,259.4326477050781 211,250.1136016845703 197.60789489746094,259.4326477050781 202.3324432373047,243.81625366210938 189.33111572265625,233.9593505859375 205.64315795898438,233.62693786621094 211,218.2159881591797 216.35684204101562,233.62693786621094 " strokeWidth="5" strokecolor="#000000" fill="#FF0000" orient="point" r2="9.1136" r="22.78401" point="5" shape="star" id="svg_1" cy="207" cx="55"/>
    //     </g>
    //    </svg>`,
    //     username: '测试'
    //   }
    // }
    //非登录状态
//     var notLogin = {
//       isLogin: false
//     }
//     res.render('index', { title: '我的note' },notLogin);
//   // },5000)
// });

module.exports = router;
