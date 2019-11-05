import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
// 引入菜单数据
import menus from '../../../config/menus.js'
import { withRouter, Link } from 'react-router-dom'
const { SubMenu } = Menu;

@withRouter
class LeftNav extends Component {
  // 创建一级菜单的
  createCmenus = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
      </Menu.Item>
    )
  }
  // 创建菜单的
  createMenus = () => {
    return menus.map(menu => {
      // 有没有二级的菜单
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
              menu.children.map(cMenu => {
                // 二级的菜单 cMenu
                return this.createCmenus(cMenu)
              })
            }

          </SubMenu>
        )
      } else {
        // 一级菜单
        return this.createCmenus(menu)
      }
    }

    )
  }


  render() {
    // 调用方法显示菜单
    const menus = this.createMenus()
    // 获取当前组件的相对应的路径,如果要使用location对象,当前的组件要么有location属性,要么当前的组件应该是一个路由组件
    const { pathname } = this.props.location
    // defaultSelectedKeys 设置默认的菜单被选中(key的属性值,遍历生成菜单的时候,key属性值都是读取出来,路径)

    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
        {
          menus
        }

      </Menu>
    );
  }
}

export default LeftNav;