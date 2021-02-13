import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Divider, Card } from "antd";

const LatestOpportunities = () => {
	return (
		<div
			className="container-fluid jumbotron posts-opportunities"
			style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("/assets/funky-lines.png")' }}
		>
			<div className="container py-5">
				<Row className="d-flex justify-content-center justify-content-lg-between">
					<Col xs={24} md={20} lg={12} className="latest-blog pr-lg-3">
						<h2 className="font-weight-bold mb-4 mb-lg-5">LATEST BLOG POSTS</h2>
						<Row>
							<Col span={6}>
								<img className="object-fit w-100 img-thumbnail rounded" src="/assets/smiling-kid-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<h4 className="font-weight-bold">Register your child</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet placeat architecto veniam, earum cum
									autem vero voluptatum ex aliquid.{" "}
									<Link to="/" data-content="Read more">
										Read more
									</Link>
								</p>
							</Col>
						</Row>
						<Divider />
						<Row>
							<Col span={6}>
								<img className="object-fit w-100 img-thumbnail rounded" src="/assets/rural-kids-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<h4 className="font-weight-bold">Register your child</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet placeat architecto veniam, earum cum
									autem vero voluptatum ex aliquid.{" "}
									<Link to="/" data-content="Read more">
										Read more
									</Link>
								</p>
							</Col>
						</Row>
						<Divider />
						<Row>
							<Col span={6}>
								<img className="object-fit w-100 img-thumbnail rounded" src="/assets/smiling-kid-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<h4 className="font-weight-bold">Register your child</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet placeat architecto veniam, earum cum
									autem vero voluptatum ex aliquid.{" "}
									<Link to="/" data-content="Read more">
										Read more
									</Link>
								</p>
							</Col>
						</Row>
					</Col>
					<Divider className="d-lg-none" />

					<Col xs={24} md={20} lg={8} className="pl-lg-3 text-justify mt-5 mt-lg-0 latest-opportunities">
						<h3 className="font-weight-bold mb-4 mb-lg-5">LATEST OPPORTUNITIES</h3>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								2021 Agbami Scholarship is out... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sit!{" "}
							</Card>
						</Link>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								2021 Agbami Scholarship is out... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sit!{" "}
							</Card>
						</Link>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								2021 Agbami Scholarship is out... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sit!{" "}
							</Card>
						</Link>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default LatestOpportunities;
