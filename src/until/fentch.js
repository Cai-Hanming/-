import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast);
const baseURL = ' http://localhost:8001'
const fetch = axios.create({
    baseURL,  // API服务器地址
    timeout: 7000,  // 设置超时时间
    headers: {'X-Custom-Header': 'foobar'}  // 请求头
  })
  
  // 封装请求拦截器
  fetch.interceptors.request.use(function (config) {
    // 在请求发送之前，在这里可以做一些事儿
    // 一般会这里，加上token的请求头信息
    config.headers.Authorization = localStorage.getItem('token')
    //console.log('请求之前', config)
    return config
  }, function (error) {
    return Promise.reject(error);
  })
  
  // 封装响应拦截器
  fetch.interceptors.response.use(function (response) {
    // 当响应数据回来时，可以对响应数据做一些过滤,有效的拿取需要的数据
    //console.log('响应数据', response)
    let res = null
  // 对后端数据进行过滤
  if (response.status === 200) {
    if (response.data && response.data.err === 0) {
      res = response.data.data
    } else {
      Toast(response.data.msg)
    }
  } else {
    Toast('网络异常，请稍后再试')
  }
  return res
}, function (error) {
  return Promise.reject(error);
  })
  
  export default fetch