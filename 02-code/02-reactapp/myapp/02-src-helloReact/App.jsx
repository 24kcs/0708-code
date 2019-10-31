// 引入React
import React,{Component} from 'react'
// 引入图片
import logo from './logo.svg'
// 引入样式文件
import './App.css'
// 创建组件,并暴露出去
export default class App extends Component{
  render(){
    return(
      <div>
        {/* 显示图片 */}
        <img className="logo" src={logo} alt="logo"/>
        <p className="title">这是App组件</p>
      </div>
    )
  }
}

