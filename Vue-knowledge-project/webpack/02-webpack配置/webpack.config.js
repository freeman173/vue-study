//项目中有一个自带的path变量（项目的根目录路径），通过require引入即可
const path=require('path')

//打包文件的配置项：将入口与出口的路径配置好了，直接用webpack打包就行。
module.exports={
  entry:'./src/main.js',//入口文件路径
  output:{
    path:path.resolve(__dirname,'dist'),//出口文件路径：项目根目录与dist文件夹的拼接。
    filename:'bundle.js'
  }
}