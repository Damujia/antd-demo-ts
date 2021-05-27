import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../route/routes'
import { addTag } from '../../redux/actions/tagList'
import { getmenu } from '../../redux/actions/menu'
// import api from '@/axios/api'
import { menus } from '../../route/menus'
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidmenu = (props: any) => {
  const [menuSelect, setMenuselect] = useState(props.history.location.pathname)
  const [menu] = useState(menus)
  // componentDidMount () {
  //   api.getMenu()
  //   .then(res=>{
  //     let menu = res.data.values[0].children
  //     this.setState({
  //       menus: menu
  //     })
  //     this.props.getmenu(menu)
  //   })
  // };
  const handClickTag = (val: any) => {
    setMenuselect(val.path)
    const { path, authName } = val
    routes.forEach(e => {
      if (e.path === path) {
        let obj = { path: path, authName, component: e.component }
        props.addTag(obj)
      }
    })
  };

  const sidmenudata = (data: any) => {
    return data.map((e: any) => {
      if (e.children) {
        return (
          (
            <SubMenu key={e.id} title={e.authName}>
              {sidmenudata(e.children)}
            </SubMenu>
          )
        )
      }
      return (
        (
          <Menu.Item key={e.path}>
            <Link to={e.path} onClick={() => handClickTag(e)}>
              <span>
                {e.authName}
              </span>
            </Link>
          </Menu.Item>
        )
      )
    });
  };
  let menuOpened = `/${menuSelect.split('/')[1]}`;
  let pathkey: string[] = []
  menus.forEach(e => {
    if (e.children) {
      e.children.forEach(f => {
        if (f.path === menuOpened) {
          pathkey = [e.id]
        }
      })
    }
  })
  const pathn = props.history.location.pathname
  return (
    <Sider trigger={null} collapsible collapsed={props.tog}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultOpenKeys={pathkey} defaultSelectedKeys={[pathn]} selectedKeys={[pathn]}>
        {sidmenudata(menu)}
      </Menu>
    </Sider>
  )
};
const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  addTag: (data: any) => {
    dispatch(addTag(data))
  },
  getmenu: (data: any) => {
    dispatch(getmenu(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidmenu));