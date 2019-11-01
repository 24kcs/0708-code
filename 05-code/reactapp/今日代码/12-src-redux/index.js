// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

// 引入store
import store from './redux/store.js'

// 引入App组件
import App from './App.jsx'

// 需要手动进行渲染
store.subscribe(()=>{
  ReactDOM.render(<App store={store} />,document.getElementById('root'))
})

// 渲染组件
ReactDOM.render(<App store={store} />,document.getElementById('root'))