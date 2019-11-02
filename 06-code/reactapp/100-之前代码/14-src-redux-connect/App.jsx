import React, { Component } from 'react';
// 引入react-redux
import { connect } from 'react-redux'
// 引入action对象
// import {increment,decrement} from './redux/action-creators.js'
// * 所有的东西, 把所有的东西都塞进action对象中
import * as action from './redux/action-creators.js'
class App extends Component {


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
    // 判断状态数据是不是奇数
    if (this.props.number % 2 !== 0) {
      this.props.increment(value)
    }

  }
  // 异步的加
  incrementAsync = () => {
    // 获取数字
    const value = this.refs.content.value * 1
    setTimeout(() => {
      this.props.increment(value)
    }, 1000);
  }
  render() {
    console.log(this)
    const { number } = this.props
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
// 第一个参数:把state中的所有数据,一次性全部怼(扔进)给props   (store仓库对象,有state数据)
// store.getState()---->就是state
// const mapStateToProps = (state) => {
//   return {
//     number:state.number
//   }
// }
// // // 第二个参数:把dispatch中所有的方法,一次性全部怼(扔进)给props  
// const mapDispatchToProps= (dispatch) => {
//   return {
//     increment: (value) => {
//       dispatch(action.increment(value))
//     },
//     decrement: (value) => {
//       dispatch(action.decrement(value))
//     }

//   }
// }





// 把state中的number数据拿出来,放在一个number属性中,
// 这些属性都被怼到当前这个组件的props中了
const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}
// 把store.dispatch()----dispatch
// 把这些方法一次性全部怼给props中了
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(action.increment(value))
    },
    decrement: (value) => {
      dispatch(action.decrement(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default App;




// function f1(){
//   return function(component){

//   }
// }
// f1()(App)


