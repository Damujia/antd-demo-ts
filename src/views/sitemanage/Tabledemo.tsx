import React from 'react'
import { withRouter } from 'react-router-dom'
import { Table } from 'antd'

const Tabledemo = (val: any) => {
  const { columns } = val
  const { data } = val
  return (
    <div>
      <Table rowSelection={{ fixed: true }} columns={columns} pagination={{ showSizeChanger: true, showTotal: total => `共${total}条数据` }} dataSource={data} scroll={{y: 500}} />
    </div>
  )
}
export default withRouter(Tabledemo);