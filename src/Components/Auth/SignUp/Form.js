import React from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
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

const config = {
	rules: [
		{
			type: "object",
			required: true,
			message: "Please select time!",
		},
	],
};

const RegistrationForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	const onGenderChange = (value) => {
		switch (value) {
			case "male":
				form.setFieldsValue({
					note: "Hi, man!",
				});
				return;

			case "female":
				form.setFieldsValue({
					note: "Hi, lady!",
				});
				return;

			case "other":
				form.setFieldsValue({
					note: "Hi there!",
				});
				return;
			default:
				return;
		}
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 80,
				}}
			>
				<Option value="234" selected>
					+234
				</Option>
			</Select>
		</Form.Item>
	);

	//  first name, last name, date of birth, lga, city, state, parent name, password, gender, highest level of education
	return (
		<div className="container-fluid registration px-0">
			<div className="row mx-0">
				<div
					className="col-md-6 d-none d-md-flex justify-content-center align-items-center fixed"
					style={{
						background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/man-with-phone.jpg")',
					}}
				>
					<h3 className="text-center text-light">Fill the form to register and unlock the pathway to countless opportunities.</h3>
				</div>
				<div className="col-md-6 registration__form">
					<Form
						{...formItemLayout}
						form={form}
						name="register"
						onFinish={onFinish}
						initialValues={{
							prefix: "234",
						}}
						className="py-5"
						scrollToFirstError
					>
						<Form.Item
							name="firstname"
							label={
								<span>
									Firstname&nbsp;
									<Tooltip title="What is your first name?">
										<QuestionCircleOutlined />
									</Tooltip>
								</span>
							}
							rules={[
								{
									required: true,
									message: "Please input your firstname!",
									whitespace: true,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="lastname"
							label={
								<span>
									lastname&nbsp;
									<Tooltip title="What is your last name?">
										<QuestionCircleOutlined />
									</Tooltip>
								</span>
							}
							rules={[
								{
									required: true,
									message: "Please input your lastname!",
									whitespace: true,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="date-picker"
							label={
								<span>
									dateofbirth&nbsp;
									<Tooltip title="What is your date of birth?">
										<QuestionCircleOutlined />
									</Tooltip>
								</span>
							}
							rules={[{ required: true, message: "Please select your date of birth" }]}
						>
							<DatePicker />
						</Form.Item>

						<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
							<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
								<Option value="male">male</Option>
								<Option value="female">female</Option>
								<Option value="other">other</Option>
							</Select>
						</Form.Item>

						<Form.Item name="highest_ducation" label="Highest Education" rules={[{ required: true }]}>
							<Select placeholder="Select a option and change input text above" allowClear>
								<Option value="none" key="male">
									none
								</Option>
								<Option value="primary" key="primary">
									primary
								</Option>
								<Option value="secondary" key="secondary">
									secondary
								</Option>
								<Option value="tertiary" key="tertiary">
									tertiary
								</Option>
							</Select>
						</Form.Item>

						<Form.Item
							name="email"
							label="E-mail"
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{
									required: false,
									message: "Please input your E-mail!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
							hasFeedback
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name="confirm"
							label="Confirm Password"
							dependencies={["password"]}
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please confirm your password!",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}

										return Promise.reject("The two passwords that you entered do not match!");
									},
								}),
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name="phone"
							label="Phone Number"
							rules={[
								{
									required: true,
									message: "Please input your phone number!",
								},
							]}
						>
							<Input
								addonBefore={prefixSelector}
								style={{
									width: "100%",
								}}
							/>
						</Form.Item>

						<Form.Item
							name="agreement"
							valuePropName="checked"
							rules={[
								{
									validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Should accept agreement")),
								},
							]}
							{...tailFormItemLayout}
						>
							<Checkbox>
								I have read the <a href="">agreement</a>
							</Checkbox>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Register
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
