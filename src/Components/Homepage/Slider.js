import React from "react";
import { Carousel } from "antd";

const Slider = () => {
	return (
		<Carousel
			effect="fade"
			autoplay={true}
			autoplaySpeed={3000}
			dotPosition="right"
			infinite={true}
			className="mb-5 slider"
		>
			<div className="slider__slide">
				<div
					className="slider__slide-bg h-100"
					style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/env.jpg")' }}
				>
					<div className="col-sm-10 col-md-8 mx-auto d-flex justify-content-center align-items-center h-100">
						<h3 className="text-light text-center">
							Reducing inequalities in accessing opportunities throughout the country...
						</h3>
					</div>
				</div>
			</div>
			<div className="slider__slide">
				<div
					className="slider__slide-bg h-100"
					style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/compt_1.jpg")' }}
				>
					<div className="col-sm-10 col-md-8 mx-auto d-flex justify-content-center align-items-center h-100">
						<h3 className="text-light text-center">Empowering the youth to live a sustainable life...</h3>
					</div>
				</div>
			</div>
			<div className="slider__slide">
				<div
					className="slider__slide-bg h-100"
					style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/kids-in-class_1.jpg")' }}
				>
					<div className="col-sm-10 col-md-8 mx-auto d-flex justify-content-center align-items-center h-100">
						<h3 className="text-light text-center">Investing in the future of bright minds...</h3>
					</div>
				</div>
			</div>
			<div className="slider__slide">
				<div
					className="slider__slide-bg h-100"
					style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/network.jpg")' }}
				>
					<div className="col-sm-10 col-md-8 mx-auto d-flex justify-content-center align-items-center h-100">
						<h3 className="text-light text-center">Connecting people to their dream job...</h3>
					</div>
				</div>
			</div>
		</Carousel>
	);
};

export default Slider;
