import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import GoogleFontLoader from 'react-google-font-loader';
import "../FontAwesome/FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../css/common.css';
import { InputGroup } from 'react-bootstrap'
import { login } from '../../API/authAPI';

class LogIn extends Component {
  onFinish = async values => {
    const history = this.props.history;
    return await login({ email: values.email, password: values.password, history });
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      // <div>
      <div className="container-full">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
        <div className="bg-circle-4"></div>
        <div className="container col-6 fixed-top shadow mt-5 h-75 mb-4 bg-white">
          <h1 className="mt-4 ml-4">Login</h1>
          {/* <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                className="btn btn-secondary font-weight-bold btn-login"
                type="primary"
                htmlType="submit"
              >
                Sign in
            </Button>
            </Form.Item>
          </Form> */}
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            {/* <InputGroup> */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* </InputGroup> */}

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                className="btn btn-secondary font-weight-bold btn-login"
                type="primary"
                htmlType="submit"
              >
                Sign in
            </Button>
            </Form.Item>
          </Form>
        </div>
      </div >
    );
  }
}

export default LogIn;
