// 引入redux
import {createStore,applyMiddleware} from 'redux'
// 引入 thunk
import thunk from 'redux-thunk'
// 引入devtool
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers'
// 暴露store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))