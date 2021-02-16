import React from "react";
import { Link } from "react-router-dom";
import ClampLines from "react-clamp-lines";
import { ArrowRightOutlined } from "@ant-design/icons";

const ApplicationInfo = () => {
	return (
		<>
			<div className="col-md-8 px-0 px-md-2">
				<h5 className="text-uppercase font-weight-bold mb-3">Important</h5>
				<div className="card border-0 shadow-sm">
					<img loading="lazy" className="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />
					<div className="tag bg-white text-pry px-3 py-2 shadow">Application</div>

					<div className="card-body">
						<p className="text-muted font-weight-bold">Nov 23, 2020</p>

						<h4 className="card-title font-weight-bold">Application details on this platform.</h4>

						<ClampLines
							text={
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod atque nobis iure totam distinctio, laborum corporis placeat animi magni ipsum delectus, officiis nisi! Numquam necessitatibus cumque laboriosam, libero quod veritatis quasi tempora sed corrupti illo fugit. Ipsa omnis quasi, eveniet laboriosam dolor quae repellendus repudiandae illum, ratione obcaecati deleniti reprehenderit veritatis veniam eum nemo totam accusantium expedita. Rerum, voluptatum."
							}
							lines={10}
							ellipsis="..."
							moreText="Expand"
							lessText="Collapse"
							className="card-text"
							innerElement="p"
						/>
						<Link className="hover-left" to="/blog/article">
							Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ApplicationInfo;
