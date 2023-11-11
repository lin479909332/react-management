import request from './index'

export const captchaAPI = (): Promise<CaptchaAPIRes> => request.get('/prod-api/captchaImage')
