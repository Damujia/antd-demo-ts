import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { conveyDel } from '../../../redux/actions/detail';
import { withRouter } from 'react-router-dom';
import { Table, Button, Row, Col, Popconfirm, message } from 'antd';
import { SearchOutlined, PlusOutlined, ClearOutlined } from '@ant-design/icons';
import './lineInfo.less';
import SelecInput from '../SelecInput';
import Input1 from '../Input1';
import Addform from '../Addform';
import Setform from '../Setform';

interface Contenttable {
  key: number,
  name: string;
  phone: string;
  location: string
}
interface Rowdeclare {
  key: number | null;
  name: string;
  phone: string;
  location: string;
}



// 查询
const Lineinfo = (props: any) => {
  // 定义表格
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
    {
      title: '操作',
      dataIndex: 'edit',
      key: 'edit',
      render: (text: string, record: Rowdeclare) =>
        tables.length >= 1 ? (
          <Row>
            <Col span="8">
              <Popconfirm title="确定删除？" onConfirm={() => { delData(record) }}>
                <Button>删 除</Button>
              </Popconfirm>
            </Col>
            <Col span="8">
              <Button onClick={() => { updateForm(record) }}>编辑</Button>
            </Col>
            <Col span="8">
              <Button onClick={() => { detailView(record) }}>详情</Button>
            </Col>
          </Row>
        ) : null
    }
  ]
  const [name, setName] = useState('') // 查询字段
  const [tables, setTables] = useState<Contenttable[]>([]) // 初始化table数据
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false) // 添加弹窗
  const [openformbox, setOpenformbox] = useState<boolean>(false) // 编辑弹窗
  const [getitform, setGetitform] = useState<Rowdeclare>({
    key: null,
    name: '',
    phone: '',
    location: '',
  })
  const [cheArr, setCheArr] = useState<number[]>([])
  // 查询函数
  const getTable = (name: string) => {
    let data = []
    for (let i = 0; i < 10; i++) {
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
    setTables(datasel)
  }
  useEffect(() => {
    getTable(name)
  }, [name])
  // 删除函数
  const delData = (val: Rowdeclare) => {
    let dataset = tables.filter((e: Rowdeclare) => e.key !== val.key)
    setTables(dataset)
    message.success('删除成功')
  };
  // 编辑函数
  const updateForm = (record: Rowdeclare) => {
    // childUp.current.assignment(record)
    setGetitform(record)
    setOpenformbox(true)
  };
  // 输入框取值
  const getInput = (val: any) => {
    console.log(val)
  };
  // 勾选回调
  const checkTabChange = (a: any[], b: Rowdeclare[]) => {
    setCheArr(a)
  };
  // 多个删除
  const delForm = () => {
    let form = tables.filter(e => cheArr.indexOf(e.key) === -1)
    setTables(form)
  };
  // 详情
  const detailView = (record: Rowdeclare) => {
    props.history.push('/siteInfo')
    props.conveyDel(record)
  }
  return (
    <div className="lineInfo">
      <Row gutter={[16, 16]}>
        <Col flex="200px">
          <div>
            <SelecInput data={tables} setName={setName} />
          </div>
        </Col>
        <Col flex="200px">
          <div>
            <Input1 callback={getInput} />
          </div>
        </Col>
        <Col flex="100px">
          <div>
            <Button size="large" type="primary" icon={<SearchOutlined />} onClick={() => console.log()}>搜 索</Button>
          </div>
        </Col>
        <Col flex="100px">
          <div>
            <Button size="large" type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>添 加</Button>
          </div>
        </Col>
        <Col flex="100px">
          <div>
            <Popconfirm title="是否删除选中数据" onConfirm={() => { delForm() }}>
              <Button size="large" type="primary" icon={<ClearOutlined />}>删 除</Button>
            </Popconfirm>
          </div>
        </Col>
      </Row>
      <Table rowSelection={{ fixed: true, onChange: checkTabChange }} columns={columns} pagination={{ showSizeChanger: true, showTotal: total => `共${total}条数据` }} dataSource={tables} scroll={{ y: 500 }} />
      <Addform isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setTables={setTables} tables={tables} />
      <Setform getitform={getitform} openformbox={openformbox} setOpenformbox={setOpenformbox} setTables={setTables} tables={tables} />
    </div>
  )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  conveyDel: (data: any) => {
    dispatch(conveyDel(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lineinfo));
