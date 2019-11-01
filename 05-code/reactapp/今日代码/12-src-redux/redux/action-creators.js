// 包含多个函数,但是函数的都返回值都是一个对象,这个对象是actions对象,工厂函数,对象中有type和data
// function increment(value){
//   return{
//     type:INCREMENT,
//     data:value
//   }
// }
// function decrement(value){
//   return{
//     type:DECREMENT,
//     data:value
//   }
// }
// 引入action-types
import { INCREMENT, DECREMENT } from './action-types.js'

export const increment = (value) => ({ type: INCREMENT, data: value })
export const decrement = (value) => ({ type: DECREMENT, data: value })