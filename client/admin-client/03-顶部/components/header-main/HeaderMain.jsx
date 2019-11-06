import React, { Component } from 'react';
import { Layout } from 'antd'
import { Button, Radio, Icon,Modal } from 'antd';
// 引入样式
import './HeaderMain.less'
// 引入设置全屏的包
import screenfull from 'screenfull'
// 引入
import { withTranslation ,getI18n} from 'react-i18next'
// 引入connect
import {connect} from 'react-redux'
// 引入removeUser
import {removeUser} from '../../redux/action-creators.js'
import dayjs from 'dayjs'
const { Header } = Layout;

@connect((state)=>({username:state.user.user.username,title:state.title}),{removeUser})
@withTranslation()
class HeaderMain extends Component {
  state = {
    isScreen: true,
    isEnglish: getI18n().language==='en',
    time:dayjs().format('YYYY-MM-DD hh:mm:ss')
  }
  // 设置是否全屏
  changeScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();

    }
  }
  changeScreenSate = () => {
    const isScreen = !this.state.isScreen
    this.setState({
      isScreen
    })
  }
  componentDidMount() {
    screenfull.on('change', this.changeScreenSate);
    setInterval(()=>{
      this.setState({
        time:dayjs().format('YYYY-MM-DD hh:mm:ss')
      })
    },1000)
  }
  componentWillUnmount() {
    screenfull.off('change', this.changeScreenSate);
  }
  // 切换语言:
  changeLanguage = () => {
    const isEnglish = !this.state.isEnglish

    this.props.i18n.changeLanguage(isEnglish ? 'en' : 'zh-CN')
    this.setState({
      isEnglish
    })
  }
  // 退出
  loginOut=()=>{
    // 弹出对话框
    Modal.confirm({
      title:'您确定退出吗',
      okText: '确定',
      cancelText: '取消',
      onOk:()=>{
        this.props.removeUser()
      }
     
    })
  }
  render() {
    const { isScreen, isEnglish,time } = this.state
    const {username,title,t}= this.props
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="header-main">
        <div className="header-top">
          <Button size="small" onClick={this.changeScreen}><Icon type={isScreen ? 'fullscreen' : 'fullscreen-exit'} /></Button>
          <Button size="small" className="header-english" onClick={this.changeLanguage}>{isEnglish ? '中文' : '英文'}</Button>
          <span>欢迎,{username}</span>
          <Button type="link" onClick={this.loginOut}>退出</Button>
        </div>
        <div className="header-content">
          <div className="header-left">{t(title)}</div>
          <div className="header-right">{time}</div>
        </div>

      </Header>
    )
  }
}

export default HeaderMain;