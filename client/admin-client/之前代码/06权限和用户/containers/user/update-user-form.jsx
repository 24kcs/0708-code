import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const Item = Form.Item;
const Option = Select.Option;

@connect(state=>({roles:state.roles}),null)
@Form.create()
class UpdateUserForm extends Component {
  constructor(props) {
    super(props)
    // 调用父级组件对象方法,传入当前form对象
    this.props.setUpdateUser(this.props.form)
  }
  static propTypes = {
    setUpdateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { user,roles } = this.props
    console.log(user)
    return (
      <Form>
        <Item label='用户名' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'name',
              {
                rules: [{ required: true, message: '请输入用户名' }],
                initialValue: user.username || ''
              }
            )(
              <Input placeholder='请输入用户名' />
            )
          }
        </Item>
        <Item label='手机号' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'phone',
              {
                rules: [{ required: true, message: '请输入手机号' }],
                initialValue: user.phone || ''
              }
            )(
              <Input placeholder='请输入手机号' />
            )
          }
        </Item>
        <Item label='邮箱' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'email',
              {
                rules: [{ required: true, message: '请输入邮箱' }],
                initialValue: user.email || ''
              }
            )(
              <Input placeholder='请输入邮箱' />
            )
          }
        </Item>
        <Item label='角色' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'roleId',
              {
                rules: [{ required: true, message: '请选择分类' }],
                initialValue: user.roleId || ''
              }
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

export default UpdateUserForm;