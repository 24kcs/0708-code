import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const Item = Form.Item;

@connect(state=>({roles:state.roles}),null)
@Form.create()
class AddRoleForm extends Component {
  constructor(props){
    super(props)
    this.props.setAddRoleForm(this.props.form)
  }
  // 设置传入的数据的类型及是否是必须的

  static propTypes={
    setAddRoleForm:PropTypes.func.isRequired,
  }
  // 表单的校验
  validator=(rule, value, callback)=>{
    if(!value)return callback('请输入角色名字')
    const {roles}=this.props
    const result=roles.find(role=>role.name===value)
    if(result) return callback('角色名字已经存在')
    
    callback()
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    this.props.setAddRoleForm(this.props.form)
    return (
      <Form>
        <Item label='角色名称' labelCol={{span: 6}}  wrapperCol={{span: 15}}>
          {
            getFieldDecorator(
              'name',{
                rules:[
                  {
                    validator:this.validator
                  }
                ]
              }
            )(
              <Input placeholder='请输入角色名称'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default AddRoleForm;