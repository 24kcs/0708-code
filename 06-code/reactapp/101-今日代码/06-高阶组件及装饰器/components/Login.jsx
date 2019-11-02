import React, { Component } from 'react';
// 引入高阶组件
import WithHoc from './width-hoc/WithHoc.jsx'
// 装饰器
@WithHoc(1,2) 
class Login extends Component {
  static replayName='Login'
  login = (e) => {
    e.preventDefault()
    console.log(this)
    const {userName,userPwd}=this.props
    console.log(userName,userPwd)
  }
  render() {
    return (
      <form>
        帐号: <input type="text" onChange={this.props.handleClick('userName')} />
        密码: <input type="password" onChange={this.props.handleClick('userPwd')} />
        <input type="submit" value="登录" onClick={this.login} />
      </form>
    );
  }
}
export default Login
// export default WithHoc(1,2)(Login);