import { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import { SearchOutlined, PlusOutlined, ClearOutlined } from '@ant-design/icons'
import SelecInput from '../SelecInput'
import Tabledemo from '../Tabledemo'
import Input1 from '../Input1'
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '地址',
    dataIndex: 'location',
    key: 'location'
  },
]
// 查询
const getTable = (name: string) => {
  let data = []
  for (let i = 0; i < 50; i++) {
    data.push(
      {
        key: i,
        name: '张麻子' + i,
        phone: '11011',
        location: '鹅城'
      }
    )
  }
  let datasel = name ? data.filter(e => e.name.indexOf(name) > -1) : data
  return datasel
}
const Lineinfo = () => {
  const [name, setName] = useState('')
  const input1Ref: any = useRef()
  return (
    <div className="lineInfo">
      <Row gutter={16}>
        <Col span={6}>
          <SelecInput data={getTable(name)} setName={setName} />
        </Col>
        <Col span={6}>
          <Input1 ref={input1Ref} />
        </Col>
        <Col span={2}>
          <Button size="large" type="primary" icon={<SearchOutlined />} onClick={() => console.log(input1Ref.current.value.state.value)}>搜 索</Button>
        </Col>
        <Col span={2}>
          <Button size="large" type="primary" icon={<PlusOutlined />}>添 加</Button>
        </Col>
        <Col span={2}>
          <Button size="large" type="primary" icon={<ClearOutlined />}>删 除</Button>
        </Col>
      </Row>
      <Tabledemo data={getTable(name)} columns={columns} name={name} />
    </div>
  )
}
export default withRouter(Lineinfo)