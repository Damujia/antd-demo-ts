import React from 'react'
import {Layout} from 'antd'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../route/routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group' // 过度
const { Content } = Layout
class Contentdemo extends React.Component {
  render() {
    return (
      <TransitionGroup style={{height: '100%', overflow: 'auto'}}>
        <CSSTransition classNames="fade" timeout={1000}>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              boxSizing: 'border-box'
            }}
          >
            {/* 渲染与路径匹配的<Route> */}
            <Switch>
              {routes.map((e) => (
                <Route
                  render={() => <e.component />}
                  key={e.path}
                  path={e.path}
                />
              ))}
            </Switch>
          </Content>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default Contentdemo;
