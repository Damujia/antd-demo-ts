import React, { useState } from 'react'
import { Layout } from 'antd'
import Sidmenu from './Sidmenu'
import Headerdemo from './Headerdemo'
import Contentdemo from './Contentdemo'
import Breaddemo from './Breaddemo'
import Tags from './tags'
import { addTag } from '../../redux/actions/tagList'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Index = (props: any) => {
  const [collapsed, setCollapsed] = useState(false)
  // const [menuSelected] = useState(props.history.location.pathname)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  // const menuOpened = `/${menuSelected.split('/')[1]}`;
  // const type = this.props.theme.type;
  return (
    <Layout className="lay_height">
      {/* 左侧导航栏 */}
      <Sidmenu />
      <Layout className="site-layout">
        {/* 头部 */}
        <Headerdemo
          colloff={collapsed}
          toggle={toggle}
          history={props.history}
        />
        {/* 页签 */}
        <Tags />
        {/* 面包屑 */}
        <Breaddemo />
        {/* 内容 */}
        <Contentdemo />
      </Layout>
    </Layout>
  )
}
const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  addTag: (data: any) => {
    dispatch(addTag(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
