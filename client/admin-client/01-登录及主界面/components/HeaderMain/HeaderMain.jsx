import React, { Component } from 'react';
import { Button, Radio, Icon,Modal } from 'antd'
// 引入screenfull
import screenfull from 'screenfull'
// 引入connect
import {connect} from 'react-redux'
// 引入action
import {removeUser} from '../../redux/action-creators.js'
// 引入样式
import './HeaderMain.less'


@connect((state)=>({
  username:state.user.user.username,
  title:state.title
}),{
  removeUser
})
class HeaderMain extends Component {
  state={
    isScreen:true
  }
  // 全屏事件
  screenFull=()=>{
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }
  // 绑定事件,用来解绑的
  screenChange=() => {
    this.setState({
      isScreen:!this.state.isScreen
    })
  }
  // 生命周期
  componentDidMount(){
    screenfull.on('change',this.screenChange );
  }
  // 组件卸载
  componentWillUnmount(){
    screenfull.off('change', this.screenChange);
  }
  // 退出操作
  loginOut=()=>{
    Modal.confirm({
      title:'您确定要退出吗',
      onOk:()=>{
        this.props.removeUser()
      },
      onCancel:()=>{},
      okText:'确定',
      cancelText:'取消'
    })
  }
  render() {
    const {isScreen} =this.state
    const{username,title}=this.props
    return (
      <div className="header">
        <div className="header-top">
          <Button size="small" onClick={this.screenFull}><Icon type={isScreen?'fullscreen':'fullscreen-exit'} /></Button>
          <Button size="small" className="header-english" >English</Button>
          <span>欢迎 {username} </span>
          <Button type="link" onClick={this.loginOut}>退出</Button>
        </div>
        <div className="header-content">
          <div className="content-left">{title}
          </div>
          <div className="content-right">
            <span>2019-11-04 21:41:33</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;