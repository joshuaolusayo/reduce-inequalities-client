import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div
			className="container-fluid user-login d-flex justify-content-center align-items-center"
			style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/globe-img.jpg")' }}
		>
			<div className="col-sm-6 col-md-4 mx-auto">
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox className="text-light">Remember me</Checkbox>
						</Form.Item>

						<Link to="/login" className="login-form-forgot">Forgot password</Link>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
