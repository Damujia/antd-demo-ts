import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { menus } from '../../route/menus'
interface Route {
  path: string,
  authName: string
}
const Breaddemo = (props: any) => {
  const getmenums = (location: string, data: any[]) => {
    let arr1: any[] = []
    let arr2: any[] = []
    data.forEach((e) => {
      if (location === e.path) {
        arr1.push(e)
      }
      if (e.children && e.children.length > 0) {
        e.children.forEach((f: any) => {
          if (location === f.path) {
            arr2.push(f)
            arr1.push({
              path: e.path,
              authName: e.authName,
            })
          }
        })
      }
    })
    return [...arr1, ...arr2]
  }
  const location: string = props.location.pathname
  const routes = getmenums(location, menus)
  const itemRender: any = (route: Route, params: any, routes: string, paths: string) => {
    // 判断匹配当前路由的面包屑为<Link></Link>
    const last = routes.indexOf(route.path) === routes.length - 1
    return last ? (
      <Link key={route.path} to={route.path}>{route.authName}</Link>
    ) : (
      <span>{route.authName}</span>
    )
  }
  return (
    <div>
      <Breadcrumb itemRender={itemRender} routes={routes} />
    </div>
  )
}

// 通过withRouter高阶组件访问历史对象的属性和最接近<Route>的匹配项，每当渲染时，withRouter都将会更新匹配，位置和历史属性传递给包装的组件
const mapStateToprops = (state: any) => state
export default connect(mapStateToprops)(withRouter(Breaddemo))
