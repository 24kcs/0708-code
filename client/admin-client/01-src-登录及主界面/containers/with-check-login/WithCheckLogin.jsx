import React, { Component } from 'react';
// 引入withRouter
import { withRouter, Redirect } from 'react-router-dom'
// withRouter包裹组件后,那么该组件就有了location,history,match对象及函数等属性
// 从redux中获取token数据
import { connect } from 'react-redux'

function WithCheckLogin(WrappedComponent) {
  return connect((state) => ({ token: state.user.token }), null)(withRouter(class extends Component {
    // 设置组件的名字
    static displayName = `WithCheckLogin(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
    // 根据不同的路径进行不同的判断
    // 如果路径是/login,判断是否登录,已经登录则跳转到/地址,否则不做任何操作
    // 如果路径是不是/,判断是否登录,如果没有登录,则跳转到/login,否则不动
    // 获取路径

    render() {
      // const { token, location, history, match } = this.props
      // ...rest---->剩下所有的属性
      const { token, ...rest } = this.props
      const {location:{pathname}}=rest
      //console.log(this.props)
      //const { pathname } = location
      if(pathname==='/login'&&token)return <Redirect to="/" />
      if(pathname!=='/login'&&!token)return <Redirect to="/login" />
      // return <WrappedComponent location={location} history={history} match={match} />
      return <WrappedComponent {...rest} />
    }
  }))
}

export default WithCheckLogin;