// 引入redux
import {createStore ,applyMiddleware} from 'redux'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers.js'
// 引入thunk
import thunk from 'redux-thunk'
// 创建store对象,还需要添加reducers函数,并暴露出去
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

// createStore()是一个函数,需要reducers函数,createSotre()函数就是创建store对象的