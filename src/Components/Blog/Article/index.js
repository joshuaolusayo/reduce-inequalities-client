import React from "react";
import Header from "../../Reusable/Header";
import ArticleDetails from "./ArticleDetails";
import Review from "../../Reusable/Review";
import Footer from "../../Reusable/Footer";
import BackToTop from "../../Reusable/BackToTop";

const BlogArticle = () => {
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
