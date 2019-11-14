import axios from 'axios'
import store from '../store'
import nprogress from 'nprogress'
nprogress.configure({ showSpinner: false })
let ins = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 12000,
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
})
/* 请求拦截器 */

ins.interceptors.request.use(
  config => {
    nprogress.start()
    if (store.token) {
      config.headers['Authorization'] = 'Bearer ' + store.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
ins.interceptors.response.use(
  res => {
    nprogress.done()
    return res.data
  },
  err => {
    nprogress.done()
    return Promise.reject(err)
  }
)
export default ins
