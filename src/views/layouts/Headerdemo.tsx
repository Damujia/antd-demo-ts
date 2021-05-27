import React from 'react'
import { Layout, Row, Col } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ImportOutlined,
} from '@ant-design/icons'
const { Header } = Layout
const Headerdemo = (props: any) => {
  const toggle = () => {
    props.toggle()
  };
  const quitbtn = () => {
    props.history.push('/login')
    sessionStorage.removeItem('userName')
  }
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row justify="space-between">
        <Col span={8}>
          {/* 创建一个react元素 */}
          {React.createElement(
            props.colloff ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            }
          )}
        </Col>
        <Col span={8}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ImportOutlined className="trigger" onClick={quitbtn} />
          </div>
        </Col>
      </Row>

    </Header>
  )
}
export default Headerdemo
