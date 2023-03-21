import { Button, Form, Input } from "antd";
import React from "react";
import { register } from "service/AuthService";

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

const Register = ({ history }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        register(values.email, values.password);
        console.log("Registration successeded");
    };

    const onFinishFailed = (values) => {
        console.log("ERRRROR");
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 600 }}
            scrollToFirstError
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
                        message:
                            "Пожалуйста, введите свой адрес электронной почты",
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
                        message: "Пожалуйста, укажите пароль",
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Подтвердите пароль"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, подтвердите свой пароль",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("Пароли должны совпадать")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Зарегестрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;
