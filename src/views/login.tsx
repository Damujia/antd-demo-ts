import { Form, Input, Button } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Ilogin extends RouteComponentProps {
  setUserinfo: any
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props: Ilogin) => {
  console.log(props)

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { workerNo, psw } = values
    if (workerNo === 'admin' && psw === 'admin') {
      sessionStorage.setItem('userName', JSON.stringify(values))
      props.history.push('/amin')
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      workerNo: 'admin',
      psw: 'admin',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="workerNo" label="账号" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="psw" label="密码" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          填充
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Login);