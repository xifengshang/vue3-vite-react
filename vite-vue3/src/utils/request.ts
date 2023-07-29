import Axios from 'axios'

const request = Axios.create({
  baseURL: ''
})

// 请求拦截
request.interceptors.request.use(config => {
  // do somethings
  return config
}, error => {
  console.log(error);
})

// 响应拦截
request.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

export default request