import { useSelector, useDispatch } from 'react-redux'
import numStatus from '@/store/NumStatus'
const Page1 = () => {
  interface AppState {
    NumStatusReducer: {
      num: number
    }
    SarrStatusReducer: {
      sarr: number[]
    }
  }
  // const { num } = useSelector((state: AppState) => state.NumStatusReducer)
  const { num } = useSelector((state: AppState) => ({
    num: state.NumStatusReducer.num,
  }))

  const { sarr } = useSelector((state: AppState) => ({
    sarr: state.SarrStatusReducer.sarr,
  }))
  const dispatch = useDispatch()
  const changeNum = () => {
    // dispatch({ type: 'add1' })
    dispatch({ type: 'add2', val: 10 })
  }

  const changeNum2 = () => {
    // redux-thunk异步调用
    dispatch(numStatus.asyncActions.asyncAdd1)
  }

  const changeSarr = () => {
    dispatch({ type: 'sarrPush', val: 100 })
  }
  return (
    <div>
      <h1>我是Page1</h1>
      <p>{num}</p>
      <p>{sarr}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>
      <button onClick={changeSarr}>数组按钮</button>
    </div>
  )
}

export default Page1
