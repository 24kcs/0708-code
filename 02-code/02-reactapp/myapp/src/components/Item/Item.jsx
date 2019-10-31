import React, { Component } from 'react';
// 引入prop-types
import PropTypes from 'prop-types'
// 引入样式
import './Item.css'
class Item extends Component {
  // 设置props数据
  static propTypes={
    comment:PropTypes.object.isRequired,
    removeComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
  // 删除操作
  remove=()=>{
    if(window.confirm('确定删除吗?')){
      this.props.removeComment(this.props.index)
    }
    
  }
  render() {
    // 获取props中的数据
    const {comment}=this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.remove}>删除</a>
        </div>
        <p className="user"><span >{comment.userName}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}

export default Item;