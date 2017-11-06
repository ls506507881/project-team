require('less/toast.less');

// var $ = require('jquery')

function toast(msg,time){
//消息和时间
    this.msg = msg; //消息赋值
    this.dismissTime = time || 1000; //消失时间，没有值的话就是一秒
    this.createToast(); //创建节点
    this.showToast();  //展示
}
toast.prototype = {
    createToast: function(){
        var tpl = '<div class="toast">'+this.msg+'</div>';
        this.$toast = $(tpl);
        $('body').append(this.$toast);
    },
    showToast: function(){
        var self = this;
        this.$toast.fadeIn(300,function(){ //出现
            setTimeout(function(){
                self.$toast.fadeOut(300,function(){
                //为什么要用self--在函数内部this已经变掉了
                    self.$toast.remove(); //移除
                });
            },self.dismissTime);
        });
    }
};
function Toast(msg,time){
    return new toast(msg, time);
}


window.Toast = Toast;
module.exports.Toast = Toast; //把Toast函数暴露出去
//Toast是函数，不能直接赋值，增加一个属性，构造函数


// 流程：先展示出来，过了三百毫秒再把自己删掉