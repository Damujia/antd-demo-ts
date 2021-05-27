import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

interface Auth {
  component: Function,
  history: any,
  location: any,
  match: any,
  path: string,
  staticContext: any
}
// 路由重定向，未登录就跳转到登录页面
const AuthRouter = (props: Auth) => {
  const { component: Component, ...rest } = props
  const isLogged: string = sessionStorage.getItem('userName') ? JSON.parse(sessionStorage.getItem('userName') as string) : null;
  return <Route {...rest} render={props1 => (isLogged ? <Component {...props1} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(AuthRouter);
