
// //将aa.js文件中的变量、函数引入
// import {num_1,sum} from "./aa.js";
//
//
// console.log(num_1)
// console.log(sum(100,100))
//
//
// //引入默认值变量
// import nam from './aa.js'
// console.log(nam)


//统一从aa.js导入
import * as aaa from './aa.js'
console.log(aaa.num_1)