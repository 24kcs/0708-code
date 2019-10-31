import React, { Component } from 'react';
// 引入路由
import {Route,Link} from 'react-router-dom'
// 引入组件
import MessageDetail from './MessageDetail.jsx'

/**
 * 
 * 2种参数
 * 1)query参数
 *  路由路径:  /login
 *  请求路径:  /login?name=tom&pwd=123
 *  <Link to={`/login/message/${m.id}?name=tom&pwd=123`} >{m.title}</Link>
 * 2)params参数
 *  路由路径:   /login/:name/:pwd
 *  请求路径:   /login/tom/123
 *  路由组件取出数据: props.match.params====>{name和pwd}
 * query参数不会影响路由匹配
 * 如何获取参数,在location的search中,有点麻烦需要自己解析
 *  
 * 
 * 
 */


class Messages extends Component {
  state={
    messages:[]
  }
  componentDidMount(){
    setTimeout(() => {
      const messages=[
        {id:1,title:'message---001'},
        {id:2,title:'message---002'},
        {id:3,title:'message---003'}
      ]
      this.setState({
        messages
      })
    }, 1000);
  }
  pushShow=(id)=>{
    this.props.history.push(`/home/messages/${id}`)
  }
  replaceShow=(id)=>{
    this.props.history.replace(`/home/messages/${id}`)
  }
  render() {
    const {messages}=this.state
    return (
      <div>
        <ul>
          {
            messages.map((m)=>{
              return (
                <li key={m.id}>
                  <Link replace to={`/home/messages/${m.id}`}>{m.title}</Link>
                 -- <button onClick={()=>(this.pushShow(m.id))}>push查看</button>
                 -- <button onClick={()=>(this.replaceShow(m.id))}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={()=>this.props.history.goBack()}>返回</button>
        <hr/>
        {/* 请求的路由路径必须有3层,第三层可以是任意字符 */}
        <Route path="/home/messages/:id" component={MessageDetail}></Route>
      </div>
    );
  }
}

export default Messages;

