import React, { Component } from 'react';
// 引入高阶组件
import WithHoc from './with-hoc/WithHoc.jsx'
class Register extends Component {

  login=(e)=>{
    e.preventDefault()
    const {userName,userPwd,resUserPwd} =this.props
    console.log(userName,userPwd,resUserPwd)
  }

  render() {
    return (
      <form onSubmit={this.login}>
        帐号:<input type="text" onChange={this.props.handleSubmit('userName')} />
        密码:<input type="password" onChange={this.props.handleSubmit('userPwd')} />
        确认密码:<input type="password" onChange={this.props.handleSubmit('resUserPwd')} />
        <button type="submit">登录</button>
      </form>
    );
  }
}
export default WithHoc(Register)
