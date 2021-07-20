import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select } from 'antd'

const { Option } = Select

interface Rowdeclare {
  key: number;
  name: string;
  phone: string;
  location: string;
}

let Setform = (props: any) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  }
  const [rowkey, setRowkey] = useState(0)
  const [form] = Form.useForm()

  const onOkclick = () => {
    form.validateFields().then(values => {
      props.tables.forEach((e: Rowdeclare) => {
        if (e.key === rowkey) {
          e.name = values.name
          e.phone = values.phone
          e.location = values.location
        }
      })
      form.resetFields()
      props.setOpenformbox(false)
    })
      .catch(info => {
        console.log(info)
      })
  }
  const handleCancel = () => {
    props.setOpenformbox(false)
  };
  const assignment = (row: Rowdeclare) => {
    setRowkey(row.key)
    form.setFieldsValue({
      name: row.name,
      phone: row.phone,
      location: row.location,
    })
  }
  // 赋值
  // useImperativeHandle(ref, () => ({
  //   assignment
  // }))
  useEffect(() => {
    if (props.getitform.key !== null) {
      assignment(props.getitform)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.getitform])
  return (
    <Modal title="修改" visible={props.openformbox} onOk={onOkclick} onCancel={handleCancel}>
      <Form {...layout} form={form} name="addform">
        <Form.Item name="name" label="名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="电话">
          <Input />
        </Form.Item>
        <Form.Item name="location" label="地址">
          <Select>
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

export default Setform