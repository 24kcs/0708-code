import React, { Component } from 'react';
import { Layout } from 'antd'
import { Button, Radio, Icon } from 'antd';
// 引入样式
import './HeaderMain.less'
// 引入screenfull的插件包
import screenfull from 'screenfull'
// 引入实现国际化的翻译的相关的包,高阶组件
import { withTranslation ,getI18n} from 'react-i18next';
const { Header } = Layout;

@withTranslation()
class HeaderMain extends Component {

  state = {
    isScreen: true,
    // 坑============后期要修改
    isEnglish: getI18n().language==='en'
  }
  // 切换全屏效果
  changeScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
  // 全屏的change事件的回调
  screenChange = () => {
    const isScreen = !this.state.isScreen
    // 切换数据状态
    this.setState({
      isScreen
    })
  }
  // 界面渲染完毕的生命周期函数
  componentDidMount() {
    screenfull.on('change', this.screenChange);
  }
  // 组件卸载的生命周期函数
  componentWillUnmount() {
    screenfull.off('change', this.screenChange);
  }
  // 国际化
  changeLanguage = () => {
    const isEnglish = !this.state.isEnglish
    // 进行翻译
    console.log(this.props)
    this.props.i18n.changeLanguage( isEnglish ? 'en' : 'zh-CN') 
    console.log(this.props.i18n)
    this.setState({
      isEnglish
    })
  }
  render() {
    const { isScreen, isEnglish } = this.state
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="header-main">
        <div className="header-top">
          <Button size="small" onClick={this.changeScreen}><Icon type={isScreen ? 'fullscreen' : 'fullscreen-exit'} /></Button>
          <Button size="small" className="header-english" onClick={this.changeLanguage}>
            {isEnglish ? '中文' : 'English'}
          </Button>
          <span>欢迎,XXX</span>
          <Button type="link">退出</Button>
        </div>
        <div className="header-content">
          <div className="header-left">首页</div>
          <div className="header-right">2019-11-11 11:11:11</div>
        </div>

      </Header>
    );
  }
}

export default HeaderMain;