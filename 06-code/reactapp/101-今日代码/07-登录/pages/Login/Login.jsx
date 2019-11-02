import React, { Component } from 'react';
// 引入less
import './Login.less'
// 引入图片
import logo from './images/logo.png'
// 引入axios
import axios from 'axios'
// 引入react-redux
import {connect} from 'react-redux'
import { Form, Icon, Input, Button,message } from 'antd';
// 引入action-creators
import {saveUser} from '../../redux/action-creators.js'
const Item = Form.Item
@connect(
  null,
  {
    saveUser
  }
)

@Form.create()
class Login extends Component {
  // 编程式
  validatorPwd = (rule, value, callback) => {
    //value=''
    // 去空格
    //value = value.trim()
    if (!value) {
      callback('请输入密码')
    } else if (value.length < 4) {
      callback('密码必须是4位')
    } else if (value.length > 12) {
      callback('密码不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('必须是英文/数字/下划线组成')
    } else {
      callback() // 验证通过
    }
  }
  handleSubmit = e => {
    e.preventDefault();

    const form = this.props.form
    // const username=form.getFieldValue('username')
    // const password=form.getFieldValue('password')
    // // 一起都获取
    // const values=form.getFieldsValue()
    // console.log(username,password,values)
    form.validateFields((error, values) => {
      // 如果error没有数据,说明验证通过了
      if (!error) {
        const {username, password} = values
        // 发送异步请求代码---跨域问题
        // proxy 服务器代理模式--正向代理
        // "proxy":"http://localhost:5000" 开启代理服务器,在package.json中
         
        axios.post(`http://localhost:3000/api/login`, { username, password })
        .then(response=>{
          if(response.data.status===0){
            // 登录成功我要进行跳转,跳转到admin界面
           // <Redirect></Redirect>用不了
            // 登录成功
            message.success('登录成功')
            this.props.saveUser(response.data.data)
            this.props.history.replace('/')
           
          }else{
            // 登录失败
            message.error(response.data.msg)
          }
        })
        .catch((error)=>{
          // 请求失败
          message.error(error)
        })



      } else {
        console.log('错误')
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_header">
          <img src={logo} alt={logo} />
          <h2>后台管理系统</h2>
        </div>
        <div className="login_content">
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                /**
                 * 必须的,必须大于4位,必须小于12位,必须是英文/数字/下划线组成
                 */

                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    { required: true, whitespace: true, message: '必须输入用户名' },
                    { min: 4, message: '必须大于4位' },
                    { max: 12, message: '必须小于12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文/数字/下划线组成' }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )
              }

            </Item>
            <Item>
              {
                getFieldDecorator('password', {

                  rules: [
                    { validator: this.validatorPwd }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )
              }
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login
//export default Form.create()(Login)
// const WrappedForm = Form.create()(Login)

// export default WrappedForm;
/**
 * 高阶函数:
 *  参数是函数,
 *  返回值是函数
 *  Promise()/then()
 *  map()/reduce()/find()/filter()
 *  setTimeout()/setInterval()
 *  addEventListener()
 *  bind()
 *  Form.create()
 *
 * 高阶组件---函数
 *  参数为组件,返回值为新组件的函数
 *  将多个组件通用的功能提取到高阶组件函数中,再通过标签属性,传递到要包装的组件中
 *
 *
 */