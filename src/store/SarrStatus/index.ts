export default {
  state: {
    sarr: [10, 20, 30],
  },
  actions: {
    sarrPush(newState: { sarr: number[] }, action: { type: string; val: number }) {
      newState.sarr.push(action.val)
    },
  },
  sarrPush: 'sarrPush',
}
