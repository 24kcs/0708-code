// 引入两个路由组件
import Login from '../containers/Login/Login.jsx'
import Admin from '../components/Admin/Admin.jsx'
import Category from '../components/category/Category.jsx'
export default[
  {
    exact:true,
    path:'/',
    component:Admin
  },
  {
    exact:true,
    path:'/category',
    component:Category
  }
]