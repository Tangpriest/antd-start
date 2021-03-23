import axios from 'axios'
import { message, notification } from 'antd'

/**
 * 如果一个web项目对应多个服务器地址
 * 可以创建多个request函数 或者 封装成类
 */
const axiosBaseUrl = 'http://localhost:3000'

/**
 * 创建axios实例
 */
const instance = axios.create({
  baseURL: axiosBaseUrl,
  timeout: 1000 * 10
})

/**
 * axios请求request中间件
 * 请求之前 ? 如果从本地缓存中获取到 xxx 则加入到 xxx
 */
instance.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem('token') || ''
  return config
}, error => {
  return Promise.reject(error)
})


/**
 * axios请求response中间件
 * 分析请求后的结果
 */
instance.interceptors.response.use(
  /**
   * 业务部分的判断
   * @param {*} response 
   * 如 errorno 等判断
   */
  response => {
    if (!response.data.success) {
      // message.error(response.data.msg || '未知错误')
      notification.warning({
        message: '业务处理异常',
        description: response.data.msg || '未知错误'
      })
    }
    return Promise.resolve(response)
  },
  /**
   * 异常系判断 
   * status !== 200的处理结果
   * @param {*} error 
   * 401 ? 返回到登陆页面
   */
  error => {
    if (/timeout\sof\s\d+ms\sexceeded/.test(error.message)) {
      message.error('网络出了点问题，请稍后重试！')
    }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (window.location.pathname != '/login') {
            window.location.href = '/login'
          }
          break
        case 404:
          notification.error({
            message: '请求业务异常',
            description: '请求的资源不存在!'
          })
          break
        case 500:
          notification.error({
            message: '请求业务异常',
            description: '内部错误，请稍后重试!'
          })
          break
        case 503:
          notification.error({
            message: '请求业务异常',
            description: '服务器正在维护，请稍等!'
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

export default instance
