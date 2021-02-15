import React, { useState, useEffect } from "react";

import Header from "../Reusable/Header";
import About from "./About";
import LatestOpportunities from "./LatestOpportunities";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Footer from "../Reusable/Footer";
import BackToTop from "../Reusable/BackToTop";

const Homepage = () => {
	const [location] = useState(window.location.href);
	useEffect(() => {
		console.log(location);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);
	return (
		<div>
			<Header />
			<Slider />
			<About />
			<LatestOpportunities />
			<Testimonials />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default Homepage;
