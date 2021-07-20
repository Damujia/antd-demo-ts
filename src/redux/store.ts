import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'; // 记录器
import thunk from 'redux-thunk'; // 返回函数
import reducers from './reducers/index';
const composeEnhancers = compose; // 组合多个函数
const loggerMiddleware = createLogger();
// 创建store
const store = createStore(
  reducers,
  // 判断生产环境
  process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware(thunk, loggerMiddleware)) : composeEnhancers(applyMiddleware(thunk))
);
export default store;