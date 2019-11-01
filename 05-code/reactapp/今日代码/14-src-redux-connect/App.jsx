import React, { Component } from 'react';
// 引入connect
import {connect} from 'react-redux'
// 引入action
import * as action from './redux/action-creators.js'
class App extends Component {
  // 加的操作
  increment = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    this.props.increment(value)
  }
  // 减的操作
  decrement = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    this.props.decrement(value)
  }
  // 奇数的时候加
  incrementIfOdd = () => {
  
    // 获取数字
    const value = this.refs.content.value * 1
    const number=this.props.number
    // 判断
    if(number%2!==0){
      this.props.increment(value)
    }
  }
  // 异步的加
  incrementAsync=()=>{
  
    // 获取数字
    const value = this.refs.content.value * 1
    setTimeout(() => {
      this.props.increment(value)
    }, 1000);
  }
  render() {
  
    const number=this.props.number
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

const mapStateToProps = (state) => ({
  number:state.number
})

const mapDispatchToProps = (dispatch) => ({
  increment:(value)=>dispatch(action.increment(value)),
  decrement:(value)=>dispatch(action.decrement(value))
})
// 向外暴露connect即可
export default connect(
  mapStateToProps,
  mapDispatchToProps

)(App)

// export default App;