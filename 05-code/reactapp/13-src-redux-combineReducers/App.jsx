import React, { Component } from 'react';
import PropTypes from 'prop-types'
// 引入action对象
// import {increment,decrement} from './redux/action-creators.js'
// * 所有的东西, 把所有的东西都塞进action对象中
 import * as action from './redux/action-creators.js'
class App extends Component {
  // 设置传入数据的类型及是否是必须的
  static propTypes={
    store:PropTypes.object.isRequired
  }

  increment = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    // this.props.store.dispatch(increment(value))
    this.props.store.dispatch(action.increment(value))
    
  }
  // 减的操作
  decrement = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    this.props.store.dispatch(action.decrement(value))
  }
  // 奇数的时候加
  incrementIfOdd = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    // 判断
    // 判断状态数据是不是奇数
    const {number}=this.props.store.getState()
    if(number%2!==0){
      this.props.store.dispatch(action.increment(value))
    }
  
  }
  // 异步的加
  incrementAsync=()=>{
   
    // 获取数字
    const value = this.refs.content.value * 1
    setTimeout(() => {
      this.props.store.dispatch(action.increment(value))
    }, 1000);
  }
  render() {
    const {number}=this.props.store.getState()
    return (
      <div>
        <h2>点击了{number}次</h2>
        <select ref="content">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>increment</button>&nbsp;
        <button onClick={this.decrement}>decrement</button>&nbsp;
        <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </div>
    );
  }
}

export default App;