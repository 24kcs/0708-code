// 引入redux
import { combineReducers } from 'redux'
// 引入SAVE_USER
import { SAVE_USER } from './action-types.js'
// 引入storage
import { getItem, setItem, removeItem } from '../utils/storage.js'
// 设置初始化数据
const initUser = {
  user: getItem('user') || {},
  token: getItem('token') || ''
}
function user(prevState = initUser, action) {
  // 判断action的type
  switch (action.type) {
    case SAVE_USER:
      // 保存user数据
      setItem('user', action.data.user)
      setItem('token', action.data.token)
      // 保存token数据
      return action.data
    default:
      return prevState
  }
}
export default combineReducers({
  user
})