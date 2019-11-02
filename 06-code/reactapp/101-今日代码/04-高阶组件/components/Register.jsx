import React, { Component } from 'react';
// 引入高阶组件
import WithHoc from './width-hoc/WithHoc.jsx'
class Register extends Component {
  login = (e) => {
    e.preventDefault()
    console.log(this)
    const {userName,userPwd,rePwd}=this.props
    console.log(userName,userPwd,rePwd)
  }
  render() {
    return (
      <form>
        帐号: <input type="text" onChange={this.props.handleClick('userName')} />
        密码: <input type="password" onChange={this.props.handleClick('userPwd')} />
        确认密码: <input type="password" onChange={this.props.handleClick('rePwd')} />
        <input type="submit" value="登录" onClick={this.login} />
      </form>
    );
  }
}

export default WithHoc(Register);