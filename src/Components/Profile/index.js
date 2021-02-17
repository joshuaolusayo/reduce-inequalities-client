import React, { useState, useEffect } from "react";

import Header from "../Reusable/Header";
import Details from "./Details";
import Footer from "../Reusable/Footer";
import BackToTop from "../Reusable/BackToTop";

const Profile = () => {
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
			<Details />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default Profile;
