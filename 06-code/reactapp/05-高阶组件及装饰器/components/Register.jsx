import React, { Component } from 'react';
// 引入WithHoc
import WithHoc from './withHoc/WithHoc.jsx'
class Register extends Component {
  // static displayName='Register'
   // 提交的操作
   submit = (event) => {
    // 阻止默认行为
    event.preventDefault()
  }
  // 显示帐号和密码
  handleClick = () => {
    const { username, userpwd,reuserpwd } = this.props
    console.log(username, userpwd,reuserpwd)
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        帐号: <input type="text" onChange={this.props.handleChange('username')} />
        密码: <input type="password" onChange={this.props.handleChange('userpwd')} />
        密码: <input type="password" onChange={this.props.handleChange('reuserpwd')} />
        <input type="submit" value="登录" onClick={this.handleClick} />
      </form>
    );
  }
}
export default WithHoc(3,4)(Register)

// connect(数据,数据)(组件)
// export default Register;