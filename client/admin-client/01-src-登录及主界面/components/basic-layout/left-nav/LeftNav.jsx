import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
// 引入menus
import menus from '../../../config/menus.js'
// 引入路由链接
import { withRouter,Link } from 'react-router-dom'
const { SubMenu } = Menu;
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
  // 创建二级菜单
  createMenus = () => {
    return menus.map(menu => {
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
              // 遍历二级菜单
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
    })
  }
  // 根据pathname找对应的key,展示二级菜单
  findOpenKeys=(pathname)=>{
    // 返回openKeys
    // let openKeys=''
    // menus.forEach(menu=>{
    //   // 是否有二级菜单
    //   if(menu.children){
    //     menu.children.forEach(cMenu=>{
    //       if(cMenu.key===pathname){
    //         openKeys=menu.key
    //       }
    //     })
    //   }
    // })
    // return openKeys
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
  render() {
    // 创建菜单
    const menus = this.createMenus()
    // 获取当前路由组件的路径,根据不同的地址,选中不同的菜单
    const { pathname } = this.props.location
    // 根据key值展开二级菜单
    const openKeys=this.findOpenKeys(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKeys]} mode="inline">
        {
          menus
        }
      </Menu>


    );
  }
}

export default LeftNav;