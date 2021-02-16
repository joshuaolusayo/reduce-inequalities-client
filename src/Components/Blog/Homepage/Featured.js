import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ClampLines from "react-clamp-lines";

const Featured = () => {
	return (
		<>
			<div className="col-md-4 px-0 px-md-2 my-5 my-md-0 featured">
				<h5 className="text-uppercase font-weight-bold mb-3">FEATURED</h5>
				<Row className="justify-content-between mb-4">
					<Col xs={12} sm={10} md={8} className="pr-1 col-h">
						<img loading="lazy" className="w-100 h-100 featured__img" src="/assets/smiling-kid-1.jpg" alt="Smiling kid" />
					</Col>
					<Col xs={12} sm={14} md={16} className="font-weight-bold pl-1 col-h d-flex flex-column justify-content-between">
						<ClampLines
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem maxime enim expedita? Fugiat quae illo omnis placeat dicta pariatur?"
							}
							lines={4}
							ellipsis="..."
							moreText="Expand"
							lessText="Collapse"
							className="font-weight-bold"
							innerElement="h2"
						/>
						<p className="text-muted font-weight-bold date mb-0">Nov 23, 2020</p>
						<Link to="/blog" className="more hover-left">
							Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
						</Link>
					</Col>
				</Row>
				<Row className="justify-content-between mb-4">
					<Col xs={12} sm={10} md={8} className="pr-1 col-h">
						<img loading="lazy" className="w-100 h-100 featured__img" src="/assets/smiling-kid-1.jpg" alt="Smiling kid" />
					</Col>
					<Col xs={12} sm={14} md={16} className="font-weight-bold pl-1 col-h d-flex flex-column justify-content-between">
						<ClampLines
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem maxime enim expedita? Fugiat quae illo omnis placeat dicta pariatur?"
							}
							lines={4}
							ellipsis="..."
							moreText="Expand"
							lessText="Collapse"
							className="font-weight-bold"
							innerElement="h2"
						/>
						<p className="text-muted font-weight-bold date mb-0">Nov 23, 2020</p>
						<Link to="/blog" className="more hover-left">
							Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
						</Link>
					</Col>
				</Row>
				<Row className="justify-content-between mb-4">
					<Col xs={12} sm={10} md={8} className="pr-1 col-h">
						<img loading="lazy" className="w-100 h-100 featured__img" src="/assets/smiling-kid-1.jpg" alt="Smiling kid" />
					</Col>
					<Col xs={12} sm={14} md={16} className="font-weight-bold pl-1 col-h d-flex flex-column justify-content-between">
						<ClampLines
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem maxime enim expedita? Fugiat quae illo omnis placeat dicta pariatur?"
							}
							lines={4}
							ellipsis="..."
							moreText="Expand"
							lessText="Collapse"
							className="font-weight-bold"
							innerElement="h2"
						/>
						<p className="text-muted font-weight-bold date mb-0">Nov 23, 2020</p>
						<Link to="/blog" className="more hover-left">
							Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
						</Link>
					</Col>
				</Row>
				<Row className="justify-content-between mb-4">
					<Col xs={12} sm={10} md={8} className="pr-1 col-h">
						<img loading="lazy" className="w-100 h-100 featured__img" src="/assets/smiling-kid-1.jpg" alt="Smiling kid" />
					</Col>
					<Col xs={12} sm={14} md={16} className="font-weight-bold pl-1 col-h d-flex flex-column justify-content-between">
						<ClampLines
							text={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem maxime enim expedita? Fugiat quae illo omnis placeat dicta pariatur?"
							}
							lines={4}
							ellipsis="..."
							moreText="Expand"
							lessText="Collapse"
							className="font-weight-bold"
							innerElement="h2"
						/>
						<p className="text-muted font-weight-bold date mb-0">Nov 23, 2020</p>
						<Link to="/blog" className="more hover-left">
							Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
						</Link>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Featured;
