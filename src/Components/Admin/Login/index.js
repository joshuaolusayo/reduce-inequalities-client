import React, { useState, useEffect } from "react";

import Header from "../../Auth/Header";
import LogInForm from "./Form";
import Footer from "../../Auth/Footer";

const AdminLogIn = () => {
	const [location] = useState(window.location.href);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);

	return (
		<div>
			<Header route={"login"} />
			<LogInForm />
			<Footer />
		</div>
	);
};

export default AdminLogIn;
