import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LogInForm = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div className="container-fluid registration user-login px-0 px-lg-auto">
			<div className="row mx-0">
				<div
					className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center fixed"
					style={{
						background:
							'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/lady-with-phone.jpg")',
					}}
				>
					<h3 className="text-center text-light">Fill the form to register and unlock the pathway to countless opportunities.</h3>
				</div>
				<div
					className="col-lg-6 registration__form d-flex justify-content-center bg-pry-light align-items-center"
					// style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/globe-img.jpg")' }}
				>
					<div className="col-sm-8 col-lg-10">
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
									<Checkbox className="text-dark">Remember me</Checkbox>
								</Form.Item>

								<Link to="/login" className="login-form-forgot">
									Forgot password
								</Link>
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogInForm;
