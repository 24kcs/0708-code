import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
// 引入connect
import { connect } from 'react-redux'
const Item = Form.Item;

@connect(state => ({ roles: state.roles }), null)
@Form.create()
class AddRoleForm extends Component {
  // 构造器,初始化form对象传入到父级组件中
  constructor(props) {
    super(props)
    this.props.setAddRoleForm(this.props.form)
  }
  // 设置父级组件传入子级组件的数据的类型及是否是必须的
  static propTypes = {
    setAddRoleForm: PropTypes.func.isRequired
  }
  // 自定义校验方法的回调
  validator = (rule, value, callback) => {
    if (!value) return callback('请输入角色名称')
    // 获取redux中的roles数据
    const { roles } = this.props
    // 通过find方法查找是否有重名的
    const result = roles.find(role => role.name === value)
    // 如果存在则请用户继续输入
    if (result) return callback('角色名称已经存在')
    // 没有文本,表单验证通过
    callback()
  }
  render() {
    // 获取验证表单的方法
    const { getFieldDecorator } = this.props.form;

    //this.props.setAddRoleForm(this.props.form)

    return (
      <Form>
        <Item label='角色名称' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'name',
              {
                // rules: [{ required: true, message: '请输入角色名称' }]

                rules: [{
                  validator: this.validator
                }]
              }
            )(
              <Input placeholder='请输入角色名称' />
            )
          }
        </Item>
      </Form>
    )
  }
}

export default AddRoleForm;