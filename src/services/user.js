import request from '../utils/request'

/**
 * 用户模块接口请求
 */
class User {
  async requestLogin({ userName, password }) {
    return request.post('/user/login', { userName, password })
  }
}


export default new User()