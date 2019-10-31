// 自动写代码 rcc即可
import React, { Component } from 'react';
// 引入图片
import logo from './logo.svg'
// 引入css文件
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
        <img className="cls" src={logo} alt="logo" />
        <p className="content">这是一条神奇的天路</p>
      </div>
    );
  }
}

export default App;

// 手动写代码
// // 引入React
// import React from 'react'
// // 定义组件
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         我是一个App组件
//       </div>
//     )
//   }
// }

// export default App