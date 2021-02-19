import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Button } from "antd";

const ProfileInfo = () => {
	const [form] = Form.useForm();
	const [disabled, setDisabled] = useState(true);

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	useEffect(() => {}, [disabled]);

	return (
		<Form form={form} name="advanced_search" className="ant-advanced-search-form profile__info mb-5 mb-lg-0" onFinish={onFinish}>
			{/* <Row gutter={24}>{getFields()}</Row> */}
			<Row>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="username"
						label="username"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="email"
						label="email"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="phone number"
						label="phone number"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="username"
						label="username"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="email"
						label="email"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="phone number"
						label="phone number"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="username"
						label="username"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="email"
						label="email"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
				<Col className="col-12 col-md-6 col-xl-4">
					<Form.Item
						name="phone number"
						label="phone number"
						rules={[
							{
								required: true,
								message: "Input something!",
							},
						]}
					>
						<Input placeholder="placeholder" disabled={disabled} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col
					span={24}
					style={{
						textAlign: "right",
					}}
				>
					<Button type="primary" htmlType="submit">
						Update
					</Button>
					<Button
						style={{
							margin: "0 8px",
						}}
						onClick={() => {
							// form.resetFields();
							setDisabled(!disabled);
						}}
					>
						{disabled ? "Edit" : "Reset"}
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default ProfileInfo;
