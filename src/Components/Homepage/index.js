import React from "react";

import Header from "../Reusable/Header";
import About from "./About";
import LatestOpportunities from "./LatestOpportunities";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Footer from "../Reusable/Footer";

const Homepage = () => {
	return (
		<div>
			<Header />
            <Slider />
            <About />
			<LatestOpportunities />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Homepage;
