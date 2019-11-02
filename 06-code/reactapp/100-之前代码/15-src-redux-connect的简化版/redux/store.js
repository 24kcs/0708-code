// 引入redux
import {createStore } from 'redux'
// 引入reducers
import reducers from './reducers.js'
// 创建store对象,还需要添加reducers函数,并暴露出去
export default createStore(reducers)

// createStore()是一个函数,需要reducers函数,createSotre()函数就是创建store对象的