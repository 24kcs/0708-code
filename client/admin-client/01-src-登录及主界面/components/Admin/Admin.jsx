import React, { Component } from 'react';
// 引入自定义的检测组件
//import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
// 引入BasicLayout组件
import BasicLayout from '../basic-layout/BasicLayout.jsx'
// 引入样式文件
import './Admin.less'
// import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
// @WithCheckLogin
class Admin extends Component {
  render() {
    return (
      <div>
        Admin
       {/* <BasicLayout/> */}
      </div>
    );
  }
}

export default Admin;