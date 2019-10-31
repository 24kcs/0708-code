/**
 * 
 * 路由:
 * 前端路由和后台路由
 * 前端路由:就是a链接,锚点------锚记, ----->导航
 * <a href="地址">文字</a>  热点文字
 * 后台路由: 地址---接口----给前端---调用接口---发送请求---获取数据,进行操作
 * 
 * React---->
 * 单页面应用程序:
 * a标签--->点击---跳转到新页面---->有可能是在新窗口中打开,也有可能在当前窗口中打开
 * 原来页面没有了,出现了一个新的页面
 * 使用路由的方式---->单页面应用程序
 * 
 * 
 * React中使用路由:
 * 安装路由的包 npm install react-router-dom
 * 引入 
 *  import {BrowserRouter,HashRouter,Switch,NavLink,Link,Route,Redirect} from 'react-router-dom'
 * import {BrowserRouter as Router } from 'react-router-dom'
 * 一个页面中一个路由器就够了
 * BrowserRouter:路由器-----不带#
 * HashRouter:路由器-------带#
 * Switch:切换路由组件
 * NavLink:自动增加active类样式
 * Link:没有active类样式
 * Route:注册路由的
 * Redirect:重定向
 * 
 * 
 * 路由链接点击的时候,会显示当前这个路由链接的地址对应的组件
 * 普通组件如果在路由中使用,此时这个组件就不再是普通的组件,而是叫:路由组件
 * 一般情况,路由组件都会放在一个单独的文件夹中,而这个文件夹的名字一般叫:pages
 * 为什么叫pages,因为里面可以放多个组件
 * 首先要在页面中使用一个路由器(BrowserRouter/HashRouter)
 * 使用  <NavLink to="路径">文字内容</NavLink>  生成路由链接---->最终在页面中变成了a标签
 * 但是通过点击链接,会显示对应的组件内容
 * <Route path="路径" component={组件名字}></Route>
 * path中的路径和to中的路径应该是一致的
 * <NavLink/> 是路由链接
 * <Route />  注册路由 
 * <Switch></Switch> 里面存放的是注册的路由代码---->什么时候使用?有切换效果就使用
 * 
 * (React/Vue)
 *  如果在页面中使用了路由,那么在index.html文件中引入样式的时候,一定要把相对路径改成绝对路径
 * 
 * 
 * 路由可以传参:
 * 会在地址栏上看到传递的参数的数据
 * 路由传参:2种
 * 1. query的方式
 *     路由路径:/login?name=admin&pwd=123
 *     路由参数:/login?name=${userName}&pwd=${userPwd}
 * 2. params的方式
 *     路由路径:/login/1/2
 *     路由参数:/login/${m.id}/${index}
 * 
 * 
 *  点击链接(<Link/>)默认就是push方式
 *  push() -----有记录
 *  replace()
 * 
 * 声明式路由(声明式编程)
 * 编程式路由(命令式编程)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  需求一改
 *  思绪如海
 *  头发一踩
 *  尊严变矮
 *  .net---->C#--->面向对象---->
 *  
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 */