import React from "react";
import { Form, Input, Button } from "antd";

const Review = () => {
	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<div className="container-fluid px-0 py-5 review mb-n5">
			<div className="container mx-auto py-5">
				<h2 className="font-weight-bold text-capitalize text-center mb-4">Write us a review</h2>
				<Form className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto" name="nest-messages" onFinish={onFinish}>
					<Form.Item name={["user", "introduction"]} label="message">
						<Input.TextArea />
					</Form.Item>
					<Form.Item>
						<Button className="rounded" type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Review;
