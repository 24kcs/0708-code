import React, { Component } from 'react';
import PropTypes from 'prop-types'
// 引入Item组件
import Item from '../Item/Item.jsx'
// 引入样式
import './List.css'
class List extends Component {
  // 设置接收的props数据
  static propTypes={
    comments:PropTypes.array.isRequired,
    removeComment:PropTypes.func.isRequired
  }
  render() {
    // 获取props中的comments数据
    const {comments}=this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment,index)=><Item key={index} comment={comment} removeComment={this.props.removeComment} index={index} />)
          }
        </ul>
      </div>

    );
  }
}

export default List;