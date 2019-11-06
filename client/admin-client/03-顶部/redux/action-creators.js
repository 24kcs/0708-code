// 包含了多个同步及异步的action的creator---包含了多个生产action对象的工厂函数
// 引入action的type
import { SAVE_USER,REMOVE_USER ,SET_TITLE} from './action-types.js'
// 保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })
// 退出---删除用户操作
export const removeUser=()=>({type:REMOVE_USER})
export const setTitle=(title)=>({type:SET_TITLE,data:title})