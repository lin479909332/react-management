import { useSelector, useDispatch } from 'react-redux'
const Page1 = () => {
  interface AppState {
    num: number
  }
  const { num } = useSelector((state: AppState) => state)
  // const { num } = useSelector((state) => ({
  //   num: state.num,
  // }))
  const dispatch = useDispatch()
  const changeNum = () => {
    // dispatch({ type: 'add1' })
    dispatch({ type: 'add2', val: 10 })
  }
  return (
    <div>
      <h1>我是Page1</h1>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
    </div>
  )
}

export default Page1
