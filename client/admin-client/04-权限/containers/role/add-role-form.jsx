import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
// 引入redux
import { connect } from 'react-redux'
const Item = Form.Item;

// 装饰器
@connect(state => ({ roles: state.roles }), null)
@Form.create()
class AddRoleForm extends Component {
  constructor(props) {
    super(props)
    this.props.setAddRoleForm(this.props.form)
  }
  static propTypes = {
    setAddRoleForm: PropTypes.func.isRequired
  }
  validator = (rule, value, callback) => {
    const { roles } = this.props
    // 获取值---value
    // 获取当前所有的角色的对象,通过数组的方法进行查找每个角色对象的名字和当前输入的名字是否一致,不能一致才能添加角色
    // 而所有的角色信息数据---数组---在redux中
    if (!value) return callback('请输入角色名称')
    const result = roles.find(role => role.name === value)
    if (result) return callback('角色名称已经存在')
    // 此时是验证通过
    callback()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    this.props.setAddRoleForm(this.props.form)

    return (
      <Form>
        <Item label='角色名称' labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          {
            getFieldDecorator(
              'name', {
              rules: [
              {
                validator: this.validator
              }
              ],
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