import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const Details = () => {
	return (
		<div class="container profile-details px-lg-5">
			<div
				className="background"
				style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/book.jpg")' }}
			></div>

			<Row className="justify-content-lg-between px-lg-5 shadow py-md-5 py-lg-auto">
				<Col xs={24} md={20} lg={6} className="bg-light shadow p-3 rounded-top mx-md-auto">
					<div className="info d-flex flex-column align-items-center">
						<img className="logo rounded-circle img-thumbnail" loading="lazy" src="/assets/smiling-kid-1.jpg" alt="passport" />
						<h4 className="mt-3 font-weight-bold mb-0">Kola Kelvin</h4>
						<p className="text-muted">Student</p>
						<Link to="/profile" class="hover-left">Log out</Link>
					</div>
				</Col>
				<Col xs={24} md={20} lg={17} className="bg-light shadow px-3 pt-5 pb-3 py-lg-5 rounded-top mx-md-auto">
					<div className="account-details">
						<h4 className="font-weight-bold">Account Details</h4>
						<hr />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Details;
