// 引入React
import React, { Component } from 'react'
// 引入Add组件
import Add from './components/Add/Add.jsx'
// 引入List组件
import List from './components/List/List.jsx'
// 引入样式
import './App.css'

// 暴露组件
export default class App extends Component {
  // 设计状态数据
  state={
    comments:[
      {id:1,userName:'tom',content:'React so easy'},
      {id:2,userName:'jack',content:'React so easy'},
      {id:3,userName:'lucy',content:'React so easy'},
      {id:4,userName:'lily',content:'React so easy'}
    ]
  }
  // 添加数据---应该添加一个comment对象
  addComment=(comment)=>{
    // 获取state中的comments
    const {comments} =this.state
    // 更新状态数据
    this.setState({
      comments:[comment,...comments]
    })
  }
  // 删除数据---删除一个comment对象
  removeComment=(index)=>{
    const {comments}=this.state
    this.setState({
      comments:comments.filter((c,i)=>i!==index)
    })
  }
  render() {
    const {comments}=this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} removeComment={this.removeComment} />
       </div>
      </div>
    )
  }
}