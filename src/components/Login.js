import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Login = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            name="email"
            label="Электронная почта"
            rules={[
                {
                    type: "email",
                    message:
                        "Пожалуйста, введите свой настоящий адрес электронной почты",
                },
                {
                    required: true,
                    message: "Пожалуйста, введите свой адрес электронной почты",
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="Пароль"
            rules={[
                {
                    required: true,
                    message: "Пожалуйста, введите пароль",
                },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </Form.Item>
    </Form>
);

export default Login;
