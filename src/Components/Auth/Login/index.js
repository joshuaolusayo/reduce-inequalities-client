import React, { useState, useEffect } from "react";
import Header from "../Header";
import LogInForm from "./Form";
import Footer from "../Footer";

const UserLogIn = () => {
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
			<LogInForm />
			<Footer />
		</div>
	);
};

export default UserLogIn;
