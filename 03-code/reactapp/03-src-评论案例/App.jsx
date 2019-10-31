// 引入React
import React, { Component } from 'react';
// 引入Add组件
import Add from './components/Add/Add.jsx'
// 引入List组件
import List from './components/List/List.jsx'
// 引入css文件
import './App.css'
class App extends Component {

  // 状态数据
  state = {
    comments: [
      { id: 1, name: '健哥', content: 'React so easy' },
      { id: 2, name: '华哥', content: 'React so good' },
      { id: 3, name: '强哥', content: 'React so nice' },
      { id: 4, name: '宁哥', content: 'React so beautiful' }
    ]
  }
  // 用来添加数据的操作的回调
  addComment = (comment) => {
    // 获取数组
    const { comments } = this.state
    // 调用数组的方法,向数组中添加数据
    //comments.unshift(comment)
    // 更新状态
    this.setState({
      comments: [comment, ...comments]
    })
  }
  // 删除数据的操作
  deleteComment=(index)=>{
    // 先获取数组
    const { comments } = this.state
    // 更新数据
    this.setState({
      comments:comments.filter((c,i)=>i!==index)
    })
  }
  render() {
    // 获取数组数据
    const { comments } = this.state
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
          <Add addComment={this.addComment} />
          <List comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    );
  }
}

export default App;