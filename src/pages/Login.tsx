import { LockOutlined, UserOutlined } from '@ant-design/icons';
import type { LRouteComponentProps } from '@epeejs/pro-layout/es/type';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from './Login.module.less';

const Login: React.FC<LRouteComponentProps> = ({ history }) => {
  return (
    <div className={styles.wrap}>
      <Form
        className={styles.login_form}
        initialValues={{ remember: true }}
        onFinish={(values) => {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values);
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="/login">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={() => history.replace('/')}>
            Log in
          </Button>
          Or <a href="/login">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
