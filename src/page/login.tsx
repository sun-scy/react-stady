import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "./index.css";
import {doLogin} from '../api'
const { Item } = Form;
const App = () => {
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
   let data  =  await doLogin(values)
   console.log(data)

  };

  return (
    <div className="login">
      <div className="form-modal">
        <h2 className="title">登录</h2>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Item
            label="手机"
            name="phone"
            rules={[{ required: true, message: "请输入手机号" }]}
          >
            <Input placeholder="请输入手机号" />
          </Item>

          <Item
            name="password"
            label="密码"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input type="password" placeholder="请输入密码" />
          </Item>

          <Item>
            <Button type='primary' block htmlType="submit">
              登录
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
