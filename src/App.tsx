import React, { FC } from 'react';
import './App.css';
import Router from './route/index'
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/css/app.css'
import './assets/css/index.css'

const App: FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;