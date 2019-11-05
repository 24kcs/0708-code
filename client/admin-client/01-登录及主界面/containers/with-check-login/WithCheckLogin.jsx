import React, { Component } from 'react';
// 引入路由
import { withRouter, Redirect } from 'react-router-dom'
// 引入connect
import { connect } from 'react-redux'
function WithCheckLogin(WrappedComponent) {
  return connect((state) => ({ token: state.user.token }), null)(withRouter(class extends Component {
    static displayName = `WithCheckLogin${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`
    render() {
      // 如果路径是login,并且有token,则跳转到/
      // 如果路径不是login,并且没有token,则跳转到login
      const { token, ...rest } = this.props
      const { location: { pathname } } = rest
      if (pathname === '/login' && token) return <Redirect to='/' />
      if (pathname !== '/login' && !token) return <Redirect to='/login' />
      return <WrappedComponent {...rest} />
    }
  }))
}

export default WithCheckLogin;