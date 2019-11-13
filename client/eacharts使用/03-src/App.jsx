import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 1,
    time:1
  }
  click=()=>{
    // 对象模式
    // const count=this.state.count+1
    // this.setState({
    //   count
    // })

   // 新的状态数据和原来有关系,推荐使用函数模式
   // 在原来的基础之上进行修改
    // this.setState((state)=>({
    //   count:state.count+1
    // }))

    this.setState((state)=>({
      count:state.count+1
    }),()=>{
      // 在render之后调用,重新渲染之后
      // 状态更新,且界面更新之后调用
      console.log('setSate中的count:',this.state.count,this.refs.sp.innerHTML)
    })
    //console.log('setState之后的,没有render之前',this.state.count)
  }

  click2=()=>{
    // 新的状态数据和原来的状态数据无关,直接改变
    this.setState({
      time:3
    })
    //console.log('setState之后的,没有render之前',this.state.time)
  }
  render() {
    const {count,time}=this.state
    console.log('render中',count)
    //console.log('render中',time)
    return (
      <div>
        <span ref="sp">{count}</span>
        <span>{time}</span>
        <button onClick={this.click}>现实效果</button>
        <button onClick={this.click2}>现实效果</button>
      </div>
    );
  }
}

export default App;