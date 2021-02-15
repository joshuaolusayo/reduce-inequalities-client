import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="container-fluid auth-header bg-light shadow d-flex justify-content-center py-2">
			<Link className="navbar-brand" to="/signup">
				<img className="ri-logo" src="/assets/logo-green.png" alt="Reduced Inequalities Logo" />
				<span> Reduced Inequalities</span>
			</Link>
		</div>
	);
};

export default Header;
