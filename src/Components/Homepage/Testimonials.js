import React from "react";
import Slider from "react-slick";
import { Card } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<div className="container-fluid px-0 testimonials">
			<div className="container jumbotron mx-auto bg-transparent">
				<h2 className="text-center font-weight-bold mb-4 text-capitalize">What People are saying about us</h2>

				<div>
					<Slider {...settings}>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities gave me access to opportunities I could never have think of.</q>
							</div>
							<p className="footer text-center text-pry">Anjali Christianah</p>
						</Card>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities helped me to secure a scholarship last last month.</q>
							</div>
							<p className="footer text-center text-pry">Kayode Thomas</p>
						</Card>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities helped me to secure my dream job without having to pay anything.</q>
							</div>
							<p className="footer text-center text-pry">Anjali Christianah</p>
						</Card>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities helped me to secure a scholarship last last month.</q>
							</div>
							<p className="footer text-center text-pry">Thom Pie</p>
						</Card>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities helped me to secure my dream job without having to pay anything.</q>
							</div>
							<p className="footer text-center text-pry">Jay Chuka</p>
						</Card>
						<Card className="rounded">
							<div className="testimonial d-flex justify-content-center align-items-center text-center">
								<q>ReducedInequalities helped me to stay abreast of the latest opportunities around me.</q>
							</div>
							<p className="footer text-center text-pry">Christianah Ebube</p>
						</Card>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
