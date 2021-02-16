import React, { useState, useEffect } from "react";

import Header from "../../Reusable/Header";
import Banner from "./Banner";
import Latest from "./Latest";
import Scholarships from "./Scholarships";
import Empowerments from "./Empowerments";
import Jobs from "./Jobs";
import Review from "../../Reusable/Review";
import Footer from "../../Reusable/Footer";
import BackToTop from "../../Reusable/BackToTop";

const BlogHomepage = () => {
	const [location] = useState(window.location.href);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);
	
	return (
		<div className="blog">
			<Header />
			<Banner />
			<Latest />
			<Scholarships />
			<Empowerments />
			<Jobs />
			<Review />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default BlogHomepage;
