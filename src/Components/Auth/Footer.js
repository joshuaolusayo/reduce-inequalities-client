import React from "react";

const Footer = () => {
	return (
		<div className="container-fluid py-5 mt-lg-5 bg-black text-light text-center footer-details auth-footer">
			<span>© 2021. All rights reserved</span>
			<br />
			<span>
				Designed by{" "}
				<a className="dev" href="mailto:oyelekeoluwasayo@gmail.com">
					Joshua Oyeleke
				</a>
			</span>
		</div>
	);
};

export default Footer;
