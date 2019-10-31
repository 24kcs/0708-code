import React, { Component } from 'react';
// BrowserRouter 不带#
// HashRouter 默认是带#
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
// 引入组件
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 指定路由链接 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  {/* Route进行路由匹配时候使用的是模糊逐级匹配,默认是模糊,可以指定完全匹配 */}
                  {/* Switch：一旦匹配上Switch中的某个 Route,后面的就不会再看了,也就是说不用Switch就直接找最后一个Route */}
                  <Route path="/about" exact component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 当请求路径和上面的都不匹配,那么就渲染下面的Redirect to属性中的路径 */}
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;