import React, { Component } from 'react';
import { Card, Button, Table, Modal } from 'antd';
import dayjs from "dayjs";

import AddUserForm from './add-user-form';
import UpdateUserForm from './update-user-form';

import {connect} from 'react-redux'
import {getUsers,getRoles} from '../../redux/action-creators.js'

@connect(state=>({users:state.users,roles:state.roles}),{getUsers,getRoles})
class User extends Component {
  state = {
    isShowAddUserModal: false, //是否展示创建用户的标识
    isShowUpdateUserModal: false, //是否展示更新用户的标识
  };
  columns = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      render: time => dayjs(time).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '所属角色',
      dataIndex: 'roleId',
      render:(roleId)=>{
        const role=this.props.roles.find(role=>role._id===roleId)
        return role&&role.name
      }
    },
    {
      title: '操作',
      render: user => {
        return <div>
          <Button type="link" onClick={() => {this.showUpdateUser(user) }}>修改</Button>
          <Button type="link" onClick={() => { }}>删除</Button>
        </div>
      }
    }
  ];
  // 显示修改界面
  showUpdateUser=(user)=>{
    // 缓存数据
    this.user=user
    this.setState({
      isShowUpdateUserModal:true
    })

  }

  // 创建用户的回调函数
  addUser = () => { };

  // 更新用户的回调函数
  updateUser = () => {

  };

  componentDidMount(){
    this.props.getUsers()
    if(this.props.roles.length===0){
      this.props.getRoles()
    }
   
  }

  switchModal = (key, value) => {
    return () => {
      this.setState({
        [key]: value
      })
    }
  };

  render() {
    const { isShowAddUserModal, isShowUpdateUserModal } = this.state;
    const {users}=this.props
    return (
      <Card
        title={
          <Button type='primary' onClick={this.switchModal('isShowAddUserModal', true)}>创建用户</Button>
        }
      >
        <Table
          columns={this.columns}
          dataSource={users}
          bordered
          rowKey='_id'
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '15', '20'],
            showQuickJumper: true,
          }}
        />

        <Modal
          title="创建用户"
          visible={isShowAddUserModal}
          onOk={this.addUser}
          onCancel={this.switchModal('isShowAddUserModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <AddUserForm setAddUser={addForm => this.addForm = addForm} />
        </Modal>

        <Modal
          title="更新用户"
          visible={isShowUpdateUserModal}
          onOk={this.updateUser}
          onCancel={this.switchModal('isShowUpdateUserModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <UpdateUserForm setUpdateUser={updateForm => this.updateForm = updateForm} user={this.user} />
        </Modal>

      </Card>
    )
  }
}
export default User;
