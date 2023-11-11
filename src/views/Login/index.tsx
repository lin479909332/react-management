import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button } from 'antd'
import { captchaAPI } from '@/request/api'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
import './loginBox.scss'
const view = () => {
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
  const gotoLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal)
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
