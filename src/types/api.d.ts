// 这个文件专门定义请求参数类型，和相应的类型

interface CaptchaAPIRes {
  msg: string
  img: string
  code: number
  captchaEnabled: boolean
  uuid: string
}
