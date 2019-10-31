import React, { Component } from 'react';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入样式
import './Add.css'
class Add extends Component {
  // 设置数据的类型及必要性
  static propTypes={
    addComment:PropTypes.func.isRequired
  }
  // 点击事件的回调函数,用来添加数据的
  add=()=>{
    // 获取用户名
    const userName=this.refs.userName.value.trim()
    const content=this.refs.content.value.trim()
    if(!userName||!content){
      return
    }
    const comment={
      id:Date.now(),
      userName,
      content
    }
    // 获取评论内容
    this.props.addComment(comment)
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="userName" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea  className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default Add;