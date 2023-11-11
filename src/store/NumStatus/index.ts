const store = {
  state: {
    num: 20,
  },
  actions: {
    add1(newState: { num: number }, _action: { type: string; val: number }) {
      newState.num++
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val
    },
  },
  // 优化redux-thunk的异步写法
  asyncActions: {
    asyncAdd1(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: 'add2', val: 10 })
      }, 1000)
    },
  },
  actionNames: {},
}

let actionNames = {}
// 自动生成actionNames
for (let key in store.actions) {
  actionNames[key] = key
}

store.actionNames = actionNames

export default store
