import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import NumStatusReducer from './NumStatus/reducer'
import SarrStatusReducer from './SarrStatus/reducer'

// 合并reducer
const reducers = combineReducers({
  NumStatusReducer,
  SarrStatusReducer,
})
// 创建仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()让浏览器redux-dev-tools能正常使用插件
// const store = legacy_createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose //rt
// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
