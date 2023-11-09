import { legacy_createStore, combineReducers } from 'redux'

import NumStatusReducer from './NumStatus/reducer'
import SarrStatusReducer from './SarrStatus/reducer'

// 合并reducer
const reducers = combineReducers({
  NumStatusReducer,
  SarrStatusReducer,
})
// 创建仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()让浏览器redux-dev-tools能正常使用插件
const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
