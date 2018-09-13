/**
 * Created by ex-wangxin on 2018/5/29.
 */

var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var WEBPACK_PRO_ENV = process.env.NODE_ENV;
console.log(process.env.NODE_ENV);
var modelString = {
    'dev':'你现在打包模式是dev开发模式',
    'dist':'你现在打包模式是dist本地生产模式',
    'release':'你现在打包模式是release服务器生成模式'
}
console.log(modelString[WEBPACK_PRO_ENV]);

var sourcePath = {
    'dev':path.join(__dirname,'../server/views'),
    'dist':path.join(__dirname,'../dist'),
    'release':'/opt/allwebfront/topwebfront'
}

module.exports={
    entry:'./src/js/router.js',
    output:{
        path:sourcePath[WEBPACK_PRO_ENV],
        filename:'js/[name]_[chunkhash:8].js',
        publicPath:'./'
    },
    devtool: '#source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','env','react','stage-0']
                    }
                }
            },
            {
                test:/\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,{loader:'css-loader'},{loader:'sass-loader'}]
            },
            {
                test:/\.(jpg|png|jpeg)$/,
                use:{
                    loader:'file-loader',
                    query:{
                        name:'images/[name]_[hash:8].[ext]',
                        publicPath:'../'
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'toDoList',
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]_[chunkhash:8].css",
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};