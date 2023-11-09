import { useSelector, useDispatch } from 'react-redux'
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

  const changeSarr = () => {
    dispatch({ type: 'sarrPush', val: 100 })
  }
  return (
    <div>
      <h1>我是Page1</h1>
      <p>{num}</p>
      <p>{sarr}</p>
      <button onClick={changeNum}>按钮</button>
      <button onClick={changeSarr}>数组按钮</button>
    </div>
  )
}

export default Page1
