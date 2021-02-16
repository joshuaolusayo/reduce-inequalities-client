import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Divider, Card } from "antd";
import ClampLines from "react-clamp-lines";

const LatestOpportunities = () => {
	return (
		<div
			className="container-fluid jumbotron"
			style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("/assets/funky-lines.png")' }}
		>
			<div className="container py-5">
				<Row className="d-flex justify-content-center justify-content-lg-between">
					<Col xs={24} md={20} lg={12} className="latest-blog pr-lg-3">
						<h2 className="font-weight-bold mb-4 mb-lg-5">LATEST BLOG POSTS</h2>
						<Row>
							<Col span={6}>
								<img loading="lazy" className="object-fit w-100 img-thumbnail rounded" src="/assets/smiling-kid-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<ClampLines
									text={"Apply for opportunity today"}
									lines={2}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="h4"
								/>

								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
								<Link className="half-filled-link" to="/" data-content="Read more">
									Read more
								</Link>
							</Col>
						</Row>
						<Divider />
						<Row>
							<Col span={6}>
								<img loading="lazy" className="object-fit w-100 img-thumbnail rounded" src="/assets/rural-kids-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<ClampLines
									text={"Apply for opportunity today"}
									lines={2}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="h4"
								/>
								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
								<Link className="half-filled-link" to="/" data-content="Read more">
									Read more
								</Link>
							</Col>
						</Row>
						<Divider />
						<Row>
							<Col span={6}>
								<img loading="lazy" className="object-fit w-100 img-thumbnail rounded" src="/assets/smiling-kid-1.jpg" alt="Kid" />
							</Col>
							<Col span={18} className="pl-2 text-justify">
								<ClampLines
									text={"Apply for opportunity today"}
									lines={2}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="h4"
								/>
								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
								<Link className="half-filled-link" to="/" data-content="Read more">
									Read more
								</Link>
							</Col>
						</Row>
					</Col>
					<Divider className="d-lg-none" />

					<Col xs={24} md={20} lg={8} className="pl-lg-3 text-justify mt-5 mt-lg-0 latest-opportunities">
						<h3 className="font-weight-bold mb-4 mb-lg-5">LATEST OPPORTUNITIES</h3>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
							</Card>
						</Link>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
							</Card>
						</Link>
						<Link className="d-block" to="/">
							<Card className="text-pry">
								<ClampLines
									text={
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
									}
									lines={3}
									ellipsis="..."
									moreText=""
									lessText="Collapse"
									className=""
									innerElement="p"
								/>
							</Card>
						</Link>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default LatestOpportunities;
