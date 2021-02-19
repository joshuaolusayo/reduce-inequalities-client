import React from "react";
import { Link } from "react-router-dom";

const Header = ({ route }) => {
	return (
		<div className="container-fluid auth-header bg-light shadow d-flex justify-content-center py-2">
			<Link className="navbar-brand" to="/admin/dashboard">
				<img loading="lazy" className="ri-logo" src="/assets/logo-green.png" alt="Reduced Inequalities Logo" />
				<span> Admin Dashboard</span>
			</Link>
		</div>
	);
};

export default Header;
