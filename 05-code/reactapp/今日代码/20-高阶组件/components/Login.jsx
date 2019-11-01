import React, { Component } from 'react';
// 引入高阶组件
import WithHoc from './with-hoc/WithHoc'
class Login extends Component {
  static displayName='Login'
  login=(e)=>{
    e.preventDefault()
    const {userName,userPwd} =this.props
    console.log(userName,userPwd)
  }
 
  render() {
    return (
      <form onSubmit={this.login}>
        帐号:<input type="text" onChange={this.props.handleSubmit('userName')} />
        密码:<input type="password" onChange={this.props.handleSubmit('userPwd')} />
        <button type="submit">登录</button>
      </form>
    );
  }
}
export default WithHoc(Login)
//export default Login;