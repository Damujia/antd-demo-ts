import React from 'react'
import { Form, Input, Select, Modal } from 'antd'

const { Option } = Select

export default function Addform(props: any) {
  const { isModalVisible } = props
  const { setIsModalVisible } = props
  const { setTables } = props
  const { tables } = props
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
  };
  const handleOk = () => {
    form.validateFields().then(values=>{
      values['key'] = (new Date()).getTime()
      setTables([...tables, values])
      form.resetFields()
      setIsModalVisible(false)
    })
    .catch(info=>{
      console.log(info)
    })
  };
  const handleCancel = () => {
    setIsModalVisible(false)
  };
  return (
    <Modal title="添加" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} form={form} name="addform" onFinish={onFinish}>
        <Form.Item name="name" label="名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="电话">
          <Input />
        </Form.Item>
        <Form.Item name="location" label="地址">
          <Select placeholder="请选择">
            <Option value="a">东</Option>
            <Option value="b">南</Option>
            <Option value="c">西</Option>
            <Option value="d">北</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}