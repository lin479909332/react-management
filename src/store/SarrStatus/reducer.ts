import handleSarr from './index'

let reducer = (state = { ...handleSarr.state }, action: { type: string; val: number }) => {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case handleSarr.sarrPush:
      handleSarr.actions[handleSarr.sarrPush](newState, action)
      break
    default:
      break
  }
  return newState
}

export default reducer
