// 引入redux
import {combineReducers} from 'redux'
// 引入action-types.js
import {SAVE_USER} from './action-types.js'
const initUser={
  user:{},
  token:''
}
function user(prevState=initUser,action){
  switch (action.type) {
    case SAVE_USER:
      return action.data
    default:
      return prevState
  }
}

export default combineReducers({
  user
})