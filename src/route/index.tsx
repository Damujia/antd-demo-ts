import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from '../views/layouts/index';
import Login from '../views/login';
import AuthRouter from '../views/auth/AuthRouter';

const Router: FC = () => (
  <HashRouter>
    {/* Switch只会渲染对应的path，不会都渲染 */}
    <Switch>
      {/* 路由精准匹配 exact属性为true时路径中的hash值必须和path完全一致才渲染对应的组件，如果为false则'/'也可以匹配'/xxx';（如果strict属性为false，则末尾是否包含反斜杠结尾不影响匹配结果）
        strict属性主要就是匹配反斜杠，规定是否匹配末尾包含反斜杠的路径，如果strict为true，则如果path中不包含反斜杠结尾，则他也不能匹配包含反斜杠结尾的路径，这个需要和exact结合使用 */}
      <Route component={Login} exact path="/login" />
      <AuthRouter path='/' component={Index} />
    </Switch>
  </HashRouter>
)
export default Router;