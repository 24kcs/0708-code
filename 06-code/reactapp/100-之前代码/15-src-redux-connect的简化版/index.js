// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App.jsx'
// 引入react-redux
import { Provider } from 'react-redux'
// 引入store对象
import store from './redux/store.js'
ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))

// store.subscribe(() => {
//   // 渲染组件
//   ReactDOM.render(<App store={store} />, document.getElementById('root'))
// })
// // 渲染组件
// ReactDOM.render(<App store={store} />, document.getElementById('root'))
