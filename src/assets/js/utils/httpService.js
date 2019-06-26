import Vue from 'vue'
import axios from 'axios'
import { notification } from 'ant-design-vue'

const httpService = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

httpService.interceptors.request.use(
  config => {
    // config.headers.token = 'ce080a991c4d1bd9'

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

httpService.interceptors.response.use(
  response => {
    if (response.data && response.data.code && response.data.code !== 200) {
      notification.open({
        type: 'error',
        placement: 'topRight',
        message: '温馨提示',
        description: response.data.message || '服务器开小差咯'
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

Vue.prototype.httpService = httpService

export default httpService
