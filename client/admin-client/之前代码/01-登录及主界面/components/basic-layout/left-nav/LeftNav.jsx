import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
// 引入menus
import menus from '../../../config/menus.js'
// 引入路由
import { withRouter,Link } from 'react-router-dom'
// 引入connect
import {connect} from 'react-redux'
// 引入action
import {updateTitle} from '../../../redux/action-creators.js'
const { SubMenu } = Menu;

@connect(null,
  {
    updateTitle
  }
  )
@withRouter
class LeftNav extends Component {
  // 创建一级菜单
  createMenuItem = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
      </Menu.Item>
    )
  }
  // 创建左侧导航菜单
  createMenus = () => (menus.map((menu) => {
    // 判断是否有二级菜单
    if (menu.children) {
      return (
        <SubMenu
          key={menu.key}
          title={
            <span>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </span>
          }
        >
          {
            // 二级菜单
            menu.children.map(cMenu => {
              return this.createMenuItem(cMenu)
            })
          }
        </SubMenu>
      )
    } else {
      // 一级菜单
      return this.createMenuItem(menu)
    }
  }))

  // 二级菜单选中,展开一级菜单
  findOpenKeys=(pathname)=>{
    // let openKey=''
    // menus.map(menu=>{
    //   // 是否有二级菜单
    //   if(menu.children){
    //     menu.children.map(cMenu=>{
    //       if(cMenu.key===pathname){
    //         openKey=menu.key
    //       }
    //     })
    //   }
    // })
    // return openKey
    for(let i=0;i<menus.length;i++){
      const menu=menus[i]
      if(menu.children){
        for(let j=0;j<menu.children.length;j++){
          const cMenu=menu.children[j]
          if(cMenu.key===pathname){
            return menu.key
          }
        }
      }
    }
  }
  // 选中菜单
  selectItem=({item})=>{
    const title=item.node.innerText
    this.props.updateTitle(title)
  }
  findTitle=(pathname)=>{
    for(let i=0;i<menus.length;i++){
      const menu=menus[i]
      if(menu.children){
        for(let j=0;j<menu.children.length;j++){
          const cMenu=menu.children[j]
          if(cMenu.key===pathname){
            return cMenu.title
          }
        }
      }else{
        if(menu.key===pathname){
          return menu.title
        }
      }
    }
  }
  componentDidMount() {
    // 坑-----------国际化的时候有问题
    // 获取路径
    const {pathname}=this.props.location
    const title=this.findTitle(pathname)
    this.props.updateTitle(title)
  }
  render() {
    // 创建左侧菜单
    const menus = this.createMenus()
    // 根据路径进行切换选中
    const { pathname } = this.props.location
    // 根据路径，默认展开菜单
    const openKeys=this.findOpenKeys(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKeys]} mode="inline" onSelect={this.selectItem}>
        {
          menus
        }
      </Menu>
    );
  }
}

export default LeftNav;