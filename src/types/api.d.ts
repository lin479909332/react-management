// 这个文件专门定义请求参数类型，和相应的类型

// 验证码的相应类型约束
interface CaptchaAPIRes {
  msg: string
  img: string
  code: number
  captchaEnabled: boolean
  uuid: string
}
