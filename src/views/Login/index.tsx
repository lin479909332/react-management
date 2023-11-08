import { useEffect } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
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
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>React+Ts&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
      </div>
    </div>
  )
}

export default view
