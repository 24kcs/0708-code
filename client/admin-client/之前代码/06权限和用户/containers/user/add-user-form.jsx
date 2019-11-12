import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types'
// 引入connect
import {connect} from 'react-redux'
import {getRoles} from '../../redux/action-creators.js'
const Item = Form.Item;
const Option = Select.Option;

@connect(state=>({roles:state.roles}),{getRoles})
@Form.create()
class AddUserForm extends Component {
  constructor(props) {
    super(props)
    // 调用父级组件对象方法,传入当前form对象
    this.props.setAddUser(this.props.form)
  }
  static propTypes = {
    setAddUser: PropTypes.func.isRequired
  }
  componentDidMount(){
    if(this.props.roles.length===0){
      this.props.getRoles()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {roles}=this.props
    return (
      <Form>
        <Item label='用户名' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'name'
            )(
              <Input placeholder='请输入用户名' />
            )
          }
        </Item>
        <Item label='密码' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'password'
            )(
              <Input placeholder='请输入密码' type='password' />
            )
          }
        </Item>
        <Item label='手机号' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'phone'
            )(
              <Input placeholder='请输入手机号' />
            )
          }
        </Item>
        <Item label='邮箱' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'email'
            )(
              <Input placeholder='请输入邮箱' />
            )
          }
        </Item>
        <Item label='角色' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'roleId'
            )(
              <Select placeholder='请选择分类'>
                {
                  roles.map(role=>{
                  return <Option key={role._id} value={role._id}>{role.name}</Option>
                  })
                }
              </Select>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default AddUserForm;