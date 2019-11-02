// 引入redux
import {createStore,applyMiddleware} from 'redux'
// 引入thunk
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers.js'
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))