import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Row, Col, Divider, Form, Input, Button } from "antd";

const Footer = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div className="footer bg-white mt-5 container-fluid px-0">
			<Divider />
			<div className="container pt-5 mx-auto">
				<Row className="justify-content-sm-center">
					<Col xs={24} sm={12} lg={8}>
						<h5 className="mb-4 text-pry">QuickLinks</h5>
						<div className="d-flex flex-column">
							<Link className="mb-3 links" to="/">
								Homepage
							</Link>
							<Link className="mb-3 links" to="/blog">
								Blog
							</Link>
							<NavHashLink to="/blog/#scholarships" className="mb-3 links">
								Scholarships
							</NavHashLink>
							<NavHashLink to="/blog/#empowerments" className="mb-3 links">
								Empowerments
							</NavHashLink>
							<NavHashLink to="/blog/#jobs" className="mb-3 links">
								Jobs
							</NavHashLink>
						</div>
					</Col>
					<Col xs={24} sm={12} lg={8} className="mt-5 mt-sm-0">
						<h5 className="mb-4 text-pry">Social Links</h5>
						<div className="d-flex flex-column">
							<a className="mb-3 links" href="https://www.facebook.com/oyeleke.oluwasayo">
								Facebook
							</a>
							<a className="mb-3 links" href="https://www.instagram.com/joshuaolusayo">
								Instagram
							</a>
							<a className="mb-3 links" href="https://www.linkedin.com">
								LinkedIn
							</a>
							<a className="mb-3 links" href="https://www.twitter.com/joshuaolusayo">
								Twitter
							</a>
						</div>
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} className="mt-5 mt-lg-0">
						<Form
							name="subscribe"
							className="newsletter"
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
						>
							<Form.Item
								name="email"
								rules={[
									{
										required: true,
										message: "Please input your email!",
									},
								]}
							>
								<Input placeholder="email" />
							</Form.Item>

							<Form.Item className="mx-md-auto">
								<Button type="primary" htmlType="submit" className="rounded">
									Subscribe
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
			<div className="container-fluid py-5 mt-5 bg-black text-light text-center footer-details">
				<span>© 2021. All rights reserved</span>
				<br />
				<span>
					Designed by{" "}
					<a className="dev" href="mailto:oyelekeoluwasayo@gmail.com">
						Joshua Oyeleke
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
