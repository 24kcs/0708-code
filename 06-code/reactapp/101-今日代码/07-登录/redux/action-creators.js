// 引入action-types.js
import {SAVE_USER} from './action-types.js'
export const saveUser=(user)=>({type:SAVE_USER,data:user})