import React, { useState, useEffect } from "react";

import Header from "../../Reusable/Header";
import ArticleDetails from "./ArticleDetails";
import Review from "../../Reusable/Review";
import Footer from "../../Reusable/Footer";
import BackToTop from "../../Reusable/BackToTop";

const BlogArticle = () => {
	const [location] = useState(window.location.href);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);
	
	return (
		<div>
			<Header />
			<ArticleDetails />
			<Review />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default BlogArticle;
