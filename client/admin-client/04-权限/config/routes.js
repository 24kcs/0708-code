// 引入两个路由组件

import Admin from '../components/Admin/Admin.jsx'
import Category from '../containers/category/Category.jsx'
// 引入商品组件
import Product from '../containers/product/Product.jsx'
// 引入添加或者修改商品的组件
import AddUpdate from '../containers/product/add-update/AddUpdate.jsx'
// 引入用户和权限
import User from '../containers/user/User.jsx'
import Role from '../containers/role/Role.jsx'
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
  },
  {
    exact:true,
    path:'/product',
    component:Product
  },
  {
    exact:true,
    path:'/product/addupdate',
    component:AddUpdate
  },
  {
    exact:true,
    path:'/user',
    component:User
  },
  {
    exact:true,
    path:'/role',
    component:Role
  }
]