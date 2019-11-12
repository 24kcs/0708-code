import React, { Component } from 'react';
import { Card, Button, Table, Radio, Modal } from 'antd';

import AddRoleForm from './add-role-form';
import UpdateRoleForm from './update-role-form';
// 引入connect 和action-creators
import { connect } from 'react-redux'
import { getRoles, addRole, delRole } from '../../redux/action-creators.js'
import dayjs from 'dayjs';
// 单选
const RadioGroup = Radio.Group;


// 装饰器
@connect((state) => ({ roles: state.roles }), { getRoles, addRole, delRole })
class Role extends Component {
  componentDidMount() {
    this.props.getRoles()
  }
  state = {
    value: '',  //单选的默认值，也就是选中的某个角色的id值
    isShowAddRoleModal: false, //是否展示创建角色的标识
    isShowUpdateRoleModal: false, //是否展示设置角色的标识
    isDisabled: true // 设置角色按钮是否 禁用
  };

  // addRoleFormRef =this.addRoleForm 
  // updateRoleFormRef =this.updateRoleForm 

  columns = [{
    dataIndex: '_id',
    render: id => <Radio value={id} />
  }, {
    title: '角色名称',
    dataIndex: 'name',
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (time) => {
      return dayjs(time).format('YYYY-MM-DD hh:mm:ss')
    }
  }, {
    title: '授权时间',
    dataIndex: 'authTime',
    render: (time) => {
      return time && dayjs(time).format('YYYY-MM-DD hh:mm:ss')
    }
  }, {
    title: '授权人',
    dataIndex: 'authName',
  }, {
    title: '操作',
    // dataIndex:'authTodo',
    render: (role) => {
      return (
        <div>
          <Button type="link">修改角色</Button>
          &nbsp;
          <Button type="link" disabled onClick={() => { this.delRole(role._id) }}>删除角色</Button>
        </div>
      )
    }
  }];
  // 删除操作
  delRole = (roleId) => {
    Modal.confirm({
      title: '确认删除吗',
      okText: '确认',
      cancelText: '取消',
      // 箭头函数
      onOk: async () => {
        this.props.delRole(roleId)
      }
    })
  }

  // 选中内容改变的时候发生
  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
      isDisabled: false
    });
  };

  switchModal = (key, value) => {
    return () => {
      this.setState({ [key]: value })
    }
  };

  //创建角色的回调函数
  addRole = () => {
    // 调用redux相关方法,添加数据
    const form = this.addRoleFormRef
    // 需要名字
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { name } = values
        // 发送异步请求,添加角色
        this.props.addRole(name)
        // 清空
        form.resetFields()
        this.setState({
          isShowAddRoleModal: false
        })
      }
    });

  };
  //设置角色权限的回调函数
  updateRole = () => { };

  render() {
    const { value, isDisabled, isShowAddRoleModal, isShowUpdateRoleModal } = this.state;
    // 获取roles=====>从redux中获取的(通过高阶组件的使用,props中就有了roles)
    const { roles } = this.props
    // 获取某个role
    const role = roles.find(role => role._id === value) || {}

    return (
      <Card
        title={
          <div>
            <Button type='primary' onClick={this.switchModal('isShowAddRoleModal', true)}>创建角色</Button> &nbsp;&nbsp;
            <Button type='primary' disabled={isDisabled} onClick={this.switchModal('isShowUpdateRoleModal', true)}>设置角色权限</Button>
          </div>
        }
      >
        <RadioGroup onChange={this.onRadioChange} value={value} style={{ width: '100%' }}>
          <Table
            columns={this.columns}
            dataSource={roles}
            bordered
            rowKey='_id'
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '15', '20'],
              showQuickJumper: true,
            }}
          />
        </RadioGroup>

        <Modal
          title="创建角色"
          visible={isShowAddRoleModal}
          onOk={this.addRole}
          onCancel={this.switchModal('isShowAddRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <AddRoleForm setAddRoleForm={form => this.addRoleFormRef = form} />
        </Modal>

        <Modal
          title="设置角色权限"
          visible={isShowUpdateRoleModal}
          onOk={this.updateRole}
          onCancel={this.switchModal('isShowUpdateRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <UpdateRoleForm setUpdateForm={form=>this.updateRoleFormRef=form} role={role} />
        </Modal>

      </Card>
    )
  }
}

export default Role;