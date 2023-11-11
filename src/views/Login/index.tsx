import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Space, Button, message } from 'antd'
import { captchaAPI, loginAPI } from '@/request/api'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
import './loginBox.scss'
const view = () => {
  const navigateTo = useNavigate()
  // 初始化背景
  useEffect(() => {
    initLoginBg()
    window.onresize = function () {
      initLoginBg()
    }
    getCaptchaImg()
  }, [])
  // 用户名
  const [usernameVal, setUsernameVal] = useState('')
  // 密码
  const [passwordVal, setPasswordVal] = useState('')
  // 验证码
  const [captchaVal, setCaptchaVal] = useState('')
  // 验证码图片
  const [captchaImgVal, setCaptchaImgVal] = useState('')
  // 用户名输入事件
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  // 密码输入事件
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }
  // 验证码输入事件
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value)
  }
  // 点击登录按钮事件
  const gotoLogin = async () => {
    if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning('请完整输入信息')
      return
    }
    const params = {
      username: usernameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem('uuid') as string,
    }
    const loginAPIRes = await loginAPI(params)
    if (loginAPIRes.code === 200) {
      message.success('登陆成功')
      // 保存token
      localStorage.setItem('react-management-token', loginAPIRes.token)
      navigateTo('/page1')
      // 移除uuid
      localStorage.removeItem('uuid')
    }
  }
  // 获取（刷新）验证
  const getCaptchaImg = async () => {
    // captchaAPI().then((res) => {
    //   console.log(res)
    // })
    let captchaAPIRes = await captchaAPI()
    if (captchaAPIRes.code === 200) {
      // 设置验证码
      setCaptchaImgVal('data:image/gif;base64,' + captchaAPIRes.img)
      // 保存uuid
      localStorage.setItem('uuid', captchaAPIRes.uuid)
    }
  }
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + ' loginBox'}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>React+TS&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height="38" src={captchaImgVal} alt="加载失败" />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block onClick={gotoLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view
