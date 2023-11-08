import { useEffect } from 'react'
import { Input, Space, Button } from 'antd'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
import './loginBox.scss'
const view = () => {
  useEffect(() => {
    initLoginBg()
    window.onresize = function () {
      initLoginBg()
    }
  }, [])
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
            <Input placeholder="用户名" />
            <Input.Password placeholder="密码" />
            <div className="captchaBox">
              <Input placeholder="验证码" />
              <div className="captchaImg">
                <img
                  height="38"
                  src="https://img1.baidu.com/it/u=1070984255,945844267&fm=253&fmt=auto&app=138&f=PNG?w=491&h=236"
                  alt=""
                />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view
