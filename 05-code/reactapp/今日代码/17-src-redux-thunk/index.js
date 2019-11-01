// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

// 引入store
import store from './redux/store.js'

// 引入Provider
import {Provider} from 'react-redux'

// 引入App组件
import App from './containers/App.jsx'
// 渲染组件
ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'))
