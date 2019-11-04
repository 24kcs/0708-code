// 引入ajax
import ajax from './ajax.js'
// 包含多个请求接口函数
export const reqLogin=(username,password)=>ajax({
  method:'POST',
  url:'/login',
  data:{
    username,
    password
  }
})