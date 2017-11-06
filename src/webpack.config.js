var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry : path.join(__dirname, './js/app/index.js'),
    //生成一个URL地址，找到入口
    output:{
        path: path.join(__dirname,'../public/js'),
        //输出目标地址
        filename: 'index.js'
        //输出目标文件
    },
    //输出文件
    module:{
        rules:[
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            }
        ]
    },
    resolve:{
        alias:{
            jquery: path.join(__dirname,"js/lib/jquery-2.0.3.min.js"),
            mod:path.join(__dirname,"js/mod"),
            less:path.join(__dirname,"less")
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};