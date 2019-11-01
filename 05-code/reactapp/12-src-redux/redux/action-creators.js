// 这是一个js文件,也可以看成是一个js模块
// 包含了多个函数,这些函数的作用,就是产生action对象的
// 包含了多个生产action对象的工厂函数
// 每个函数内部一定要返回对象,只不过这个对象我们叫action对象
// 每个对象中有type和data
// 一定要把这些函数全部的暴露出去

// 引入type
import { INCREMENT, DECREMENT } from './action-types.js'
// 分别暴露
export const increment = (value) => ({ type: INCREMENT, data: value })
export const decrement = (value) => ({ type: DECREMENT, data: value })






// 加的操作的函数
// function increment(value){
//   return {
//     type:'INCREMENT',
//     data:value
//   }
// }

// 减的操作的函数
// function decrement(value){
//   return{
//     type:'DECREMENT',
//     data:value
//   }
// }
// export const decrement= function (value){
//   return{
//     type:'DECREMENT',
//     data:value
//   }
// }




