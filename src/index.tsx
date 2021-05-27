import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<ConfigProvider locale={zhCN}><App /></ConfigProvider>, document.getElementById('root'));
// 优化程序，提高运行速度
serviceWorker.unregister();