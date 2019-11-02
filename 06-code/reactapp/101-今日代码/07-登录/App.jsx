import React, { Component } from 'react';
// 引入路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// 引入组件
import routes from './config/routes.js'
class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Admin} />
        </Switch> */}

        <Switch>

          {
            routes.map((route, index) => (
              // <Route key={index} path={route.path} exact={route.exact} component={route.component} />
              <Route key={index} {...route} />
            ))
          }
        </Switch>

      </Router>
    );
  }
}

export default App;