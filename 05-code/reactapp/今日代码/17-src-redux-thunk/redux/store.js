// 引入redux
import { createStore,applyMiddleware } from 'redux'
// 引入thunk
import thunk from 'redux-thunk'
// 引入reducers
import reducers from './reducers.js'
// 创建store----内部创建store对象,但是需要reducers函数
export default createStore(reducers,applyMiddleware(thunk))