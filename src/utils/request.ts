import { extend } from 'umi-request'
import { ApplicationConfig } from '../config'

const apiRequest = extend({
  timeout: 1000,
  credentials: 'omit'
})
apiRequest.interceptors.request.use((url, options) => {
  const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
  const token = localStorage.getItem('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return {
    url: apiUrl + url,
    options
  }
})
export default apiRequest
