import React, { Component } from 'react';
// 引入的是antd 中的Button组件
// import Button from 'antd/es/button';
// // 引入的是antd 中的样式文件
// import 'antd/dist/antd.css'
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
         <Button type="primary">按钮</Button>
      </div>
    );
  }
}

export default App;