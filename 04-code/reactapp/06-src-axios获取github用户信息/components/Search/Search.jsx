import React, { Component } from 'react';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入样式
import './Search.css'
class Search extends Component {
  // 限定数据的类型及是否是必须的
  static propTypes = {
    search: PropTypes.func.isRequired
  }
  // 搜索的方法
  search = () => {
    // 获取到输入的搜索内容
    const search = this.refs.content.value.trim()
    // 调用父级组件传过来的search方法
    if (search) {
      this.props.search(search)
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

export default Search;