// 包含多个返回reducers函数

// redux提供了合并reducers的方法
import {combineReducers} from 'redux'
import { INCREMENT, DECREMENT } from './action-types.js'
function number(prevState = 0, action) {
  console.log(prevState, action)
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

function arr(prevState = [], action) {
  switch (action.type) {
    case 'UPDATEARR':
      return [action.data, ...prevState]
    default:
      return prevState
  }
}
// 只能暴露一个
// export default number

// 同时暴露多个
export default combineReducers({
  number,
  arr
})