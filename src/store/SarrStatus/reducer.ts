import handler from './index'

let reducer = (state = { ...handler.state }, action: { type: string }) => {
  let newState = JSON.parse(JSON.stringify(state))

  // 拿着action.type和actionNames进行每一项的对比，如果是相等，就调用 模块名.actions[下标](newState,action)
  for (let key in handler.actionNames) {
    if (action.type === handler.actionNames[key]) {
      handler.actions[handler.actionNames[key]](newState, action)
    }
  }
  return newState
}

export default reducer
