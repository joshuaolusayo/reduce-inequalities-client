import React, { useState, useEffect } from "react";
import Header from "../Reusable/Header";
import About from "./About";
import LatestOpportunities from "./LatestOpportunities";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Footer from "../Reusable/Footer";
import BackToTop from "../Reusable/BackToTop";

const Homepage = ({ setAuth }) => {
	const [location] = useState(window.location.href);

	async function getName() {
		try {
			const response = await fetch("http://localhost:5000/", { method: "GET", headers: { token: localStorage.token } });
			const parseRes = await response.json();
			console.log(parseRes);
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getName();
	});

	useEffect(() => {
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
