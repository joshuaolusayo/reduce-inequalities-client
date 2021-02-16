import React, { useState, useEffect } from "react";
import Header from "../Header";
import RegistrationForm from "./Form";
import Footer from "../Footer";

const UserSignUp = () => {
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
			<RegistrationForm />
			<Footer />
		</div>
	);
};

export default UserSignUp;
