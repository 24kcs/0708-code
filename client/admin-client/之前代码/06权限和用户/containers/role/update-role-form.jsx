import React, { Component } from 'react';
import { Form, Input, Tree } from 'antd';
import PropTypes from 'prop-types'

// 引入menus
import menus from '../../config/menus.js'

// 引入高阶组件
import {withTranslation} from 'react-i18next'
import PubSub from 'pubsub-js'

const Item = Form.Item;
const { TreeNode } = Tree;

@withTranslation()
@Form.create()
class UpdateRoleForm extends Component {
  // 构造器
  constructor(props) {
    super(props)
    // 传入form对象---父级组件使用
    this.props.setUpdateForm(this.props.form)

  }
  // 设置传入的数据的类型及是否是必须的
  static propTypes = {
    setUpdateForm: PropTypes.func.isRequired,
    role: PropTypes.object.isRequired
  }
  // 默认状态数据
  state = {
    checkedKeys: [], // 保存选中的菜单选项---默认空的数据
  };
  // 根据menus生成对应的树形结构
  getMenusTree = () => {

    const treeData= menus.map(menu => {
      if (menu.children) {
        return {
          title: menu.title,
          key: menu.key,
          children: menu.children.map(cMenu => {
            return {
              title: cMenu.title,
              key: cMenu.key,
            }
          })
        }
      } else {
        return {

          title: menu.title,
          key: menu.key,

        }
      }
    })

    return [
      {
        title:'平台权限',
        key:'role_key',
        children:treeData
      }
    ]

  }



  // 选中复选框的时候触发
  onCheck = (checkedKeys) => {
    // 可以获取当前复选框的所有父级和子级节点
    this.setState({ checkedKeys },()=>{
      // 保存当前的选中的菜单值
      PubSub.publish('getCheckedKeys',checkedKeys);
      // 置空
      this.state.checkedKeys=[]
    });
  };



  // 渲染节点的
  renderTreeNodes = data => data.map((item) => {
    const {t}=this.props
    if (item.children) {
      return (
        <TreeNode title={t(item.title)} key={item.key} dataRef={item}>
          {
            this.renderTreeNodes(item.children)
          }
        </TreeNode>
      );
    }
    return <TreeNode title={t(item.title)} key={item.key} />;
  });

  render() {
    const { getFieldDecorator } = this.props.form;
    // 向父级组件传入form对象
    this.props.setUpdateForm(this.props.form)
    // 获取角色的名字
    const {name,menus } = this.props.role
    const {checkedKeys}=this.state
   
    return (
      <Form>
        <Item label='角色名称'>
          {
            getFieldDecorator(
              'name',
              {
                initialValue: name || ''  // role.name
              }
            )(
              <Input placeholder='请输入角色名称' disabled />
            )
          }
        </Item>
        <Item>
          <Tree
            checkable // 是有有复选框
            defaultExpandAll // 是否默认展开所有的
            //defaultCheckedKeys={menus} // 展开当前角色对应的菜单
            checkedKeys={checkedKeys.length?checkedKeys:menus}
            onCheck={this.onCheck}
          >
            {this.renderTreeNodes(this.getMenusTree())}
          </Tree>
        </Item>
      </Form>
    )
  }
}

export default UpdateRoleForm;