// 二次封装axios
/**
 * 
 * 将post的请求参数转换为urlencoding的形式(默认json格式)---使用请求拦截器
 * 请求成功的结果不是response,而是response.data-----使用响应拦截器
 * 统一处理错误信息---使用响应拦截器(失败问题)
 * 
 */
// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 引入store
import store from '../redux/store.js'
// 引入message 
import { message } from 'antd'

// 设置请求路径
axios.defaults.baseURL = 'http://localhost:3000/api'
// 请求拦截器
axios.interceptors.request.use(config => {
  // 获取data,判断data是否存在及是否对象,然后进行urlencoding转换
  let data = config.data
  if (data && data instanceof Object) {
    data = qs.stringify(data)
  }
  // 请求的时候获取token,如果需要携带token,则把token添加到请求头中
  const { token } = store.getState().user
  if (token) {
    // 设置请求头
    config.headers.authorization = token
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  message.error('请求出错' + error.message)
  // 返回失败的Promise对象,并中断失败信息
  return new Promise(() => { })
})

// 暴露axios
export default axios