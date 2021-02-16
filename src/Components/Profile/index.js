import React, { useState, useEffect } from "react";

import Header from "../Reusable/Header";

import Footer from "../Reusable/Footer";
import BackToTop from "../Reusable/BackToTop";
import Details from "./Details";

const Profile = () => {
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
            <Details />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default Profile;
