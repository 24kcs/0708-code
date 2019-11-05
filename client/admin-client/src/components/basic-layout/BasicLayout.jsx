import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import logo from '../../assets/images/logo.png'
// 引入样式
import './BasicLayout.less'
// 引入LeftNav组件
import LeftNav from './left-nav/LeftNav.jsx'
const { Header, Content, Footer, Sider } = Layout;




class BasicLayout extends Component {
  // 状态数据
  state = {
    collapsed: false
  };
  // 显示或者是隐藏
  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="basic-layout-logo">
            <img src={logo} alt="logo"/>
            <h2 style={{display:this.state.collapsed?'none':'block'}}>硅谷后台</h2>
          </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    );
  }
}

export default BasicLayout;