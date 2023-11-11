const store =  {
  state: {
    sarr: [10, 20, 30],
  },
  actions: {
    sarrPush(newState: { sarr: number[] }, action: { type: string; val: number }) {
      newState.sarr.push(action.val)
    },
  },
  actionNames:{}
}

let actionNames = {}
// 自动生成actionNames
for (let key in store.actions) {
  actionNames[key] = key
}

store.actionNames = actionNames

export default store
