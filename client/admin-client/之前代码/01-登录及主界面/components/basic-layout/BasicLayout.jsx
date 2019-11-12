import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
// 引入logo
import logo from '../../assets/images/logo.png'
// 引入样式
import './BasicLayout.less'
// 引入LeftNav
import LeftNav from './left-nav/LeftNav.jsx'
// 引入校验组件
import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
// 引入头部组件
import HeaderMain from '../HeaderMain/HeaderMain.jsx'
const { Header, Content, Footer, Sider } = Layout;

@WithCheckLogin
class BasicLayout extends Component {
  state = {
    collapsed: false,
    isDisplay:true
  };

  onCollapse = collapsed => {
    this.setState({ 
      collapsed,
      isDisplay:!this.state.isDisplay
     });
  };
  render() {
    const {isDisplay} =this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="basic-layout-logo">
            <img src={logo} alt="logo"/>
            <h2 style={{display:isDisplay?'block':'none'}}>硅谷后台</h2>
          </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0,height:80 }} >
            <HeaderMain/>
          </Header>
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