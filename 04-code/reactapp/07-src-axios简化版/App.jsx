import React, { Component } from 'react';
// 引入组件
import Search from './components/Search/Search.jsx'
import Main from './components/Main/Main.jsx'
class App extends Component {
  // 设计一个状态数据
  state={
    searchName:'' // 搜索的内容
  }
  // 只要调用这个方法,就会更新searchName数据
  search=(searchName)=>{
    this.setState({
      searchName
    })
  }
  render() {
    return (
      <div className="container">
          <Search search={this.search} />
          <Main searchName={this.state.searchName} />
      </div>
    );
  }
}

export default App;