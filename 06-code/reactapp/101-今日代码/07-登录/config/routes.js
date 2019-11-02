import Admin from '../pages/Admin/Admin.jsx'
import Login from '../pages/Login/Login.jsx'
export default[
 
  {
    path:'/',
    exact:true,
    component:Admin
  },
  {
    path:'/login',
    exact:true,
    component:Login
  }
]