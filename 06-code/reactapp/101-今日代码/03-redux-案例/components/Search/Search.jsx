import React, { Component } from 'react';
// 引入connect
import { connect } from 'react-redux'
import { updateSearch } from '../../redux/action-creators.js'
// 引入PubSub
import PubSub from 'pubsub-js'
// 引入样式
import './Search.css'
class Search extends Component {
  // 搜索的方法
  search = () => {
    // 获取到输入的搜索内容
    const search = this.refs.content.value.trim()
    // 调用父级组件传过来的search方法
    if (search) {
      this.props.updateSearch(search)
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="content" />
          <button onClick={this.search}>Search</button>
        </div>
      </section>

    );
  }
}
export default connect(
  null,
  {
    updateSearch
  }
)(Search)