import React, { Component } from 'react';
// 引入routes
import routes from './config/routes.js'
// 引入路由
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        {
          // routes.map((route,index)=>(
          //   <Route key={index} path={route.path} component={route.component} exact={route.exact} />
          // ))

          routes.map((route,index)=>(<Route key={index} {...route} />))
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