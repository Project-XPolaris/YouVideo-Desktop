import { extend } from 'umi-request'
import { ApplicationConfig } from '../config'

const apiRequest = extend({
  timeout: 1000,
  credentials: 'omit'
})
apiRequest.interceptors.request.use((url, options) => {
  if (url.startsWith('http')) {
    return {
      url,
      options
    }
  }
  const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
  const token = localStorage.getItem(ApplicationConfig.storeKey.token)
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
export const authRequest = extend({
  timeout: 1000,
  credentials: 'omit'
})
export default apiRequest
