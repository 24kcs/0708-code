import React, { Component } from 'react';
// 引入组件
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <hr/>
        <Register/>
      </div>
    );
  }
}

export default App;