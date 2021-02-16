import React from "react";
import { Link } from "react-router-dom";
import { Row, Divider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ClampLines from "react-clamp-lines";

const Scholarships = () => {
	return (
		<div className="container-fluid scholarships pt-5" id="scholarships">
			<div className="container mx-auto mb-5 px-0">
				<h3 className="font-weight-bold">Scholarships</h3>
				<Row className="justify-content-between">
					<div className="card border-0 shadow-sm mb-4">
						<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />

						<div className="card-body">
							<p className="text-muted date">
								<span className="font-weight-bold">Deadline:</span> Nov 23, 2020
							</p>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={3}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="font-weight-bold"
								innerElement="h4"
							/>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={4}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="card-text"
								innerElement="p"
							/>
							<Link className="hover-left" to="/scholarship">
								Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
							</Link>
						</div>
					</div>

					<div className="card border-0 shadow-sm mb-4">
						<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />

						<div className="card-body">
							<p className="text-muted date">
								<span className="font-weight-bold">Deadline:</span> Nov 23, 2020
							</p>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={3}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="font-weight-bold"
								innerElement="h4"
							/>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={4}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="card-text"
								innerElement="p"
							/>
							<Link className="hover-left" to="/scholarship">
								Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
							</Link>
						</div>
					</div>

					<div className="card border-0 shadow-sm mb-4">
						<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />

						<div className="card-body">
							<p className="text-muted date">
								<span className="font-weight-bold">Deadline:</span> Nov 23, 2020
							</p>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={3}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="font-weight-bold"
								innerElement="h4"
							/>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={4}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="card-text"
								innerElement="p"
							/>
							<Link className="hover-left" to="/scholarship">
								Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
							</Link>
						</div>
					</div>

					<div className="card border-0 shadow-sm mb-4">
						<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />

						<div className="card-body">
							<p className="text-muted date">
								<span className="font-weight-bold">Deadline:</span> Nov 23, 2020
							</p>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={3}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="font-weight-bold"
								innerElement="h4"
							/>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={4}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="card-text"
								innerElement="p"
							/>
							<Link className="hover-left" to="/scholarship">
								Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
							</Link>
						</div>
					</div>

					<div className="card border-0 shadow-sm mb-4">
						<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />

						<div className="card-body">
							<p className="text-muted date">
								<span className="font-weight-bold">Deadline:</span> Nov 23, 2020
							</p>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={3}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="font-weight-bold"
								innerElement="h4"
							/>

							<ClampLines
								text={
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
								}
								lines={4}
								ellipsis="..."
								moreText="Expand"
								lessText="Collapse"
								className="card-text"
								innerElement="p"
							/>
							<Link className="hover-left" to="/scholarship">
								Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
							</Link>
						</div>
					</div>
				</Row>
			</div>
			<Divider />
		</div>
	);
};

export default Scholarships;
