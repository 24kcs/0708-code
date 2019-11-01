// 引入redux
import {createStore} from 'redux'
// 引入reducers
import reducers from './reducers.js'
// 创建store----内部创建store对象,但是需要reducers函数
export default createStore(reducers)