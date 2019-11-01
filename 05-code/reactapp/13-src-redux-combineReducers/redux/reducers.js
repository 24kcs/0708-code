// 这是一个js文件,也是一个js模块
// 包含了多个函数,创建reducers的,每个函数就是一个reducer,多个函数就是多个reducer,就是reducers
//就写一个函数,就是一个reducer函数,这个函数需要两个参数:
// 参数1:一个默认值
// 参数2:action对象
// 判断action.type,根据不同的type,对数据(action.data)做不同的操作

// 引入type
// 引入redux
import {combineReducers} from 'redux'
import { INCREMENT, DECREMENT } from './action-types.js'
// 最终这个函数也要暴露出去
function number(prevState = 0, action) {
  console.log(prevState,action)
  // 判断type
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data  // 加的操作
    case DECREMENT:
      return prevState - action.data  // 减的操作
    default:
      return prevState
  }
}

function arr(prevState=[],action){
  switch (action.type) {
    case 'UPDATEARR':
      return [action.data,...prevState]
    default:
      return prevState
  }
}

// 两个一起暴露出去,以函数的方式进行暴露,内部是对象
export default combineReducers({
  number,
  arr
})


// 代码的流程控制
// 顺序,分支,循环
