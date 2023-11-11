import handleNum from './index'

let reducer = (state = { ...handleNum.state }, action: { type: string; val: number }) => {
  let newState = JSON.parse(JSON.stringify(state))

  // switch (action.type) {
  //   case handleNum.add1:
  //     handleNum.actions[handleNum.add1](newState, action)
  //     break
  //   case handleNum.add2:
  //     handleNum.actions[handleNum.add2](newState, action)
  //     break
  //   default:
  //     break
  // }
  
  // 拿着action.type和actionNames进行每一项的对比，如果是相等，就调用 模块名.actions[下标](newState,action)
  for (let key in handleNum.actionNames) {
    if (action.type === handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, action)
    }
  }
  return newState
}

export default reducer
