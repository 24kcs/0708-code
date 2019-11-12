import React, { Component } from 'react';
// 引入routes
import routes from './config/routes.js'
// 引入路由
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// 引入NotMatch
import NotMatch from './components/not-match/NotMatch.jsx'
// 引入BasicLayout组件
import BasicLayout from './components/basic-layout/BasicLayout.jsx'
// 引入Login
import Login from './containers/Login/Login.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        {
          <Switch>
            <Route path="/login" component={Login} exact />
            <BasicLayout>
              <Switch>
                {
                  routes.map((route, index) => (<Route key={index} {...route} />))
                }
                <Route component={NotMatch} />
              </Switch>
            </BasicLayout>
          </Switch>



          // routes.map((route,index)=>(
          //   <Route key={index} path={route.path} component={route.component} exact={route.exact} />
          // ))


        }


        {/* <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch> */}

        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Admin} /> */}


      </Router>
    );
  }
}

export default App;