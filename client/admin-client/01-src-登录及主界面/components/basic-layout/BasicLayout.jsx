import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
// 引入图片
import logo from '../../assets/images/logo.png'
// 引入样式文件
import './BasicLayout.less'
import LeftNav from './left-nav/LeftNav.jsx'

const { Header, Content, Footer, Sider } = Layout;

@WithCheckLogin
class BasicLayout extends Component {
  state = {
    collapsed: false,
    isDisplay: true
  };

  onCollapse = collapsed => {
    this.setState({
      collapsed,
      isDisplay: !this.state.isDisplay
    });
  };
  render() {
    const { isDisplay } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="basic-layout-logo" >
            <img src={logo} alt="logo" />
            <h2 style={{ display: isDisplay ? 'block' : 'none' }}>硅谷后台</h2>
          </div>
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {
                this.props.children
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;