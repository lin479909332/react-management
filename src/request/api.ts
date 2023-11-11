import request from './index'

export const captchaAPI = () => request.get('/prod-api/captchaImage')
