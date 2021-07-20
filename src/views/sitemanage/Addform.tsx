import React from 'react'
import { Form, Input, Select, Modal, message } from 'antd'

const { Option } = Select

export default function Addform(props: any) {
  const { isModalVisible } = props
  const { setIsModalVisible } = props
  const { setTables } = props
  const { tables } = props
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  }
  const [form] = Form.useForm()
  const handleOk = () => {
    form.validateFields().then(values=>{
      values['key'] = (new Date()).getTime()
      setTables([...tables, values])
      form.resetFields()
      setIsModalVisible(false)
      message.success('添加成功')
    })
    .catch(info=>{
      message.warning('添加失败')
    })
  };
  const handleCancel = () => {
    setIsModalVisible(false)
  };
  return (
    <Modal title="添加" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} form={form} name="addform">
        <Form.Item name="name" label="名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="电话">
          <Input />
        </Form.Item>
        <Form.Item name="location" label="地址">
          <Select placeholder="请选择">
            <Option value="东">东</Option>
            <Option value="南">南</Option>
            <Option value="西">西</Option>
            <Option value="北">北</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}