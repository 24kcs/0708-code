// 包含多个返回reducers函数

import { INCREMENT, DECREMENT } from './action-types.js'
function number(prevState = 0, action) {
  console.log(prevState,action)
  // 根据action的类型进行数据的操作
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data
    case DECREMENT:
      return prevState - action.data
    default:
      return prevState
  }
}
export default number