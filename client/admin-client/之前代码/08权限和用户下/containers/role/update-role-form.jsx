import React, { Component } from 'react';
import { Form, Input, Tree } from 'antd';
import PropTypes from 'prop-types'
// 引入menus
import menus from '../../config/menus.js'

// 引入i18n
import {withTranslation} from 'react-i18next'
// 引入PubSub
import PubSub from 'pubsub-js'
const Item = Form.Item;
const { TreeNode } = Tree;


@withTranslation()
@Form.create()
class UpdateRoleForm extends Component {
  // 构造器,初始化数据
  constructor(props){
    super(props)
    // 调用父级方法,传入当前组件的form对象,用来验证表单数据
    this.props.setUpdateForm(this.props.form)
  }
  // 设置父级组件传入的数据的类型及是否是必须的
  static propTypes={
    setUpdateForm:PropTypes.func.isRequired,
    role:PropTypes.object.isRequired
  }
  // 默认的状态数据
  state = {
    // 默认菜单选项
    checkedKeys: [],
  };
  
  getTreeData=()=>{
    const treeData=menus.map(menu=>{
      if(menu.children){
        return {
          title: menu.title,
          key: menu.key,
          children:menu.children.map(cMenu=>{
            return {
              title: cMenu.title,
              key: cMenu.key,
            }
          })
        }
      }else{
        // 没有子级节点,字节返回节点标签
        return {
          title: menu.title,
          key: menu.key,
        }
      }
    })
    return [
      {
        title: '平台权限',
        key: '/root',
        children:treeData
      }
    ]
  }

  // 选中节点菜单的时候触发该事件 
  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys },()=>{
      // 获取当前的菜单选项
      PubSub.publish('getCheckKeys',checkedKeys);
      // 重置
      this.state.checkedKeys=[]
    });
  };
  

  // 渲染节点树
  
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
  
  render () {
    const { getFieldDecorator } = this.props.form;
    // this.props.setUpdateForm(this.props.form)
    // 获取角色的名字和menus
    const {name,menus}=this.props.role
    const {checkedKeys }=this.state
    return (
      <Form>
        <Item label='角色名称'>
          {
            getFieldDecorator(
              'name',
              {
                initialValue: name||''
              }
            )(
              <Input placeholder='请输入角色名称' disabled/>
            )
          }
        </Item>
        <Item>
          <Tree
            checkable
            checkedKeys={checkedKeys.length?checkedKeys:menus}
            onCheck={this.onCheck}
            defaultExpandAll
          >
            {this.renderTreeNodes(this.getTreeData())}
          </Tree>
        </Item>
      </Form>
    )
  }
}

export default UpdateRoleForm;